import { User } from "../entities/User";

interface ICreateUserDTO {
    name: string,
    email: string,
    birthday: Date
};

interface IUserRepository {
    create({ name, email, birthday }: ICreateUserDTO): Promise <User>;
    listAll(): Promise <User[]>;
    findById(id: number): Promise <User> | undefined
    findByEmail(email: string): Promise <User> | undefined
    deleteById(id: number): Promise <number> | undefined
};

export { ICreateUserDTO, IUserRepository };
