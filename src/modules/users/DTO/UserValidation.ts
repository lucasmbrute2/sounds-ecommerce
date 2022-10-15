import { string, object, date } from "yup"
import { Validate } from "../../../shared/DTOValidation/SchemaValidate"
import { CreateUserDTO } from "./CreateUserDTO"

let schema = object().shape({
  id: string().uuid(),
  username: string().email("Should be a valid email"),
  password: string()
    .required()
    .min(8, "Password must contain at least 8 characters.")
    .max(12, "Password should not be greater than 12 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  first_name: string().required(),
  last_name: string().required(),
  phone: string(),
  created_at: date().default(() => new Date()),
  modified_at: date().default(() => new Date())
})

export class UserValidation extends Validate {
  constructor(payload: CreateUserDTO) {
    super(schema, payload)
  }
}