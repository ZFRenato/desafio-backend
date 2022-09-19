import { Request, Response } from "express";
import { ListUserCase } from "./ListUsersCase";


class ListUserController {
    private listUserCase: ListUserCase

    constructor(createUserCase: ListUserCase) {
        this.listUserCase = createUserCase;
    }

     async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listOfUsers = await this.listUserCase.execute()
            return response.status(200).json({
                users: listOfUsers
            })
        } catch (error) {
            return response.status(404).json({
                error: error.message
            })
        }
        
    }
}

export {  ListUserController }