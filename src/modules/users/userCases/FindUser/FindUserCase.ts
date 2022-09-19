import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    id: number
}


class FindUserCase {
    private usersRepository: IUserRepository;

    constructor(usersRepository: IUserRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ id }: IRequest): Promise<User> {
        const userFound =  await this.usersRepository.findById(id);
        if (!userFound) {
            throw new Error("User Not Found")
        }
        return userFound;
    }
}

export { FindUserCase };