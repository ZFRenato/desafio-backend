import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";


export default(): CreateUserController => {
    const usersRepository = new UsersRepository();
    const createUserCase = new CreateUserCase(usersRepository);
    const createUserController = new CreateUserController(createUserCase);

    return createUserController;
}