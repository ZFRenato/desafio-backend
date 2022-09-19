import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    id: number
}


class DeleteUserCase {
    private usersRepository: IUserRepository;

    constructor(usersRepository: IUserRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ id }: IRequest): Promise<void> {        
        const numberUserDeleteds =  await this.usersRepository.deleteById(id);
        if (!numberUserDeleteds) {
            throw new Error("User Not Deleted")
        }
    }
}

export { DeleteUserCase };