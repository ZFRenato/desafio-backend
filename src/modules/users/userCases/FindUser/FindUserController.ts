import { Request, Response } from "express";
import { FindUserCase } from "./FindUserCase";


class FindUserController {
    private findUserCase: FindUserCase

    constructor(findUserCase: FindUserCase) {
        this.findUserCase = findUserCase;
    }

     async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        try {
            const userSelected = await this.findUserCase.execute({ id: parseInt(id) })
            return response.status(200).json({
                user: userSelected
            })
        } catch (error) {
            return response.status(404).json({
                error: error.message
            })
        }
        
    }
}

export { FindUserController }