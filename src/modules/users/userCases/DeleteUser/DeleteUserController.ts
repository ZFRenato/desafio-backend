import { Request, Response } from "express";
import { DeleteUserCase } from "./DeleteUserCase";


class DeleteUserController {
    private delteUserCase: DeleteUserCase

    constructor(delteUserCase: DeleteUserCase) {
        this.delteUserCase = delteUserCase;
    }

     async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        try {
            const userSelected = await this.delteUserCase.execute({ id: parseInt(id) })
            return response.status(200).json({
                msg: `User with id: ${ id } deleted`
            })
        } catch (error) {
            return response.status(500).json({
                error: error.message
            })
        }
        
    }
}

export { DeleteUserController }