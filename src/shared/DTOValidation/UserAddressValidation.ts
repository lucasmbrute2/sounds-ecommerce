import {object, string} from "yup"
import { CreateUserAddressDTO } from "../../modules/users/DTO/CreateUserDTO"
import { Validate } from "./SchemaValidate"

let schema = object().shape({
    user_id: string().required().uuid(),
    address_line1: string().required(),
    address_line2: string(),
    city: string().required(),
    postal_code: string().required().matches(new RegExp('^[0-9]{5}(?:-[0-9]{3})?$'), 'Must contain 8 letters spaced by -'),
    country: string().required(),
    phone: string(),
    mobile: string().required()
})

export class UserAddressValidation extends Validate {
    constructor(payload: CreateUserAddressDTO){
        super(schema, payload)
    }
}