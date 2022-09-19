import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string,
    email: string,
    birthday: Date
}

class CreateUserCase {
    private usersRepository: IUserRepository;

    constructor(usersRepository: IUserRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ name, email, birthday }: IRequest): Promise<User> {
        const userEmailExist =  await this.usersRepository.findByEmail(email);
        if (userEmailExist) {
            throw new Error("Email already exists")
        }
        return this.usersRepository.create({ name, email, birthday });
    }
}

export { CreateUserCase };