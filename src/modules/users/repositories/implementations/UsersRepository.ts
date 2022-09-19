import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUserRepository } from "../IUsersRepository";


class UsersRepository implements IUserRepository {
    private repository: Repository<User>

    constructor() {
        this.repository =  AppDataSource.getRepository(User)
    }

   async create({ name, email, birthday }: ICreateUserDTO): Promise<User> {
        birthday = new Date(birthday);
        const user = this.repository.create({
            name,
            email,
            birthday
        });
        return await this.repository.save(user);
    }

    async listAll(): Promise<User[]> {
        return await this.repository.find();        
    }

    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({ 
            where: {
                email: email
            }
         });
    }

   async findById(id: number): Promise<User> {
        return await this.repository.findOne({
            where: {
                id: id
            }
        });
    }

    async deleteById(id: number): Promise<number> {
           const result = await this.repository.delete({ id });
           return result.affected;
    }
}

export { UsersRepository };