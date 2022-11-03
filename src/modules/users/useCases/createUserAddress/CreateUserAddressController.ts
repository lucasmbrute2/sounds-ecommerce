import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserAddressDTO } from "../../DTO/CreateUserDTO";
import { CreateUserAddressUseCase } from "./CreateUserAddressUseCase";

export class CreateUserAddressController {
    async handle(req:Request, res: Response): Promise<Response> {
        const { address_line1, address_line2, city, country, mobile, phone, postal_code }: CreateUserAddressDTO = req.body
        const { user_id } = req.params
        
        const createUserAddressUseCase = container.resolve(CreateUserAddressUseCase)

        const userAddres = await createUserAddressUseCase.execute({
            address_line1,
            address_line2,
            city,
            country,
            mobile,
            phone,
            postal_code,
            user_id
        })

        return res.status(201).json({
            userAddres
        });
    }
}