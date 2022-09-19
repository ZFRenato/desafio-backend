import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUserCase } from "./ListUsersCase";
import { ListUserController } from "./ListUsersController";

export default(): ListUserController => {
    const usersRepository = new UsersRepository();
    const listUserCase = new ListUserCase(usersRepository);
    const listUserController = new ListUserController(listUserCase);

    return listUserController;
}