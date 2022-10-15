import { ObjectSchema } from "yup"
import { AssertsShape } from "yup/lib/object";

export class Validate {
  private readonly schema;
  private readonly payload;

  constructor(schema: ObjectSchema<any>, payload: Object) {
    this.schema = schema;
    this.payload = payload;
  }

  async validate(): Promise<Boolean> {
    console.log("inside validate", this.payload)
    return await this.schema.isValid(this.payload)
  }
}
