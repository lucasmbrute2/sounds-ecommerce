import { ObjectSchema } from "yup"
import { AppError } from "../errors/AppError";

export class Validate {
  private readonly schema;
  private readonly payload;

  constructor(schema: ObjectSchema<any>, payload: Object) {
    this.schema = schema;
    this.payload = payload;
  }

  async validate() {
    await this.schema.validate(this.payload, { abortEarly: false }).catch(({ errors })=> {
      throw new AppError(errors.join().replaceAll(",", ", "));
    })
  }
}
