import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { Transaction } from "../../entities/Transaction";
import { User } from "../../entities/User";
import { ICreateTransactionDTO, ITransactionsRepository } from "../ITransactionsRepository";


class TransactionsRepository implements ITransactionsRepository {
    private repository: Repository<Transaction>;

    constructor() {
        this.repository =  AppDataSource.getRepository(Transaction)
    }

   async create({ type, value, recipient }: ICreateTransactionDTO): Promise<Transaction> {

        const transaction = this.repository.create({
            type,
            value,
            recipient
        });
        return await this.repository.save(transaction);
    }

    async listAll(user: User): Promise<Transaction[]> {
        return await this.repository.find({
            where: {
                recipient: user
            }
        });        
    }
    

   async findById(id: number): Promise<Transaction> {
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

export { TransactionsRepository };