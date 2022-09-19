import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { FindUserCase } from "./FindUserCase";
import { FindUserController } from "./FindUserController";

export default(): FindUserController => {
    const usersRepository = new UsersRepository();
    const findUserCase = new FindUserCase(usersRepository);
    const findUserController = new FindUserController(findUserCase);

    return findUserController;
}