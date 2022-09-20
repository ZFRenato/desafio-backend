import { Transaction } from "../entities/Transaction";
import { User } from "../entities/User";


interface ICreateTransactionDTO {
    type: string,
    value: number,
    recipient: User
};

interface ITransactionsRepository {
    create({ type, value, recipient }: ICreateTransactionDTO): Promise <Transaction>;
    listAll(user: User): Promise <Transaction[]>;
    findById(id: number): Promise <Transaction> | undefined
    deleteById(id: number): Promise <number> | undefined
};

export { ICreateTransactionDTO, ITransactionsRepository };
