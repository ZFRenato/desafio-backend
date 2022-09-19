import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { DeleteUserCase } from "./DeleteUserCase";
import { DeleteUserController } from "./DeleteUserController";

export default(): DeleteUserController => {
    const usersRepository = new UsersRepository();
    const deleteUserCase = new DeleteUserCase(usersRepository);
    const deleteUserController = new DeleteUserController(deleteUserCase);

    return deleteUserController;
}