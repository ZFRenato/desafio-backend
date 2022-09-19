import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUsersRepository";


class ListUserCase {
    private usersRepository: IUserRepository;

    constructor(usersRepository: IUserRepository) {
        this.usersRepository = usersRepository;
    }

    async execute(): Promise<User[]> {
        const listUsers =  await this.usersRepository.listAll();
        if (!listUsers) {
            throw new Error("Users Not Found")
        }
        return listUsers.reverse();
    }
}

export { ListUserCase };