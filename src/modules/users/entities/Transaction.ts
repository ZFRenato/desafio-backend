import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity("transaction")
   class Transaction {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @Column({ unique: true })
    value: number

    @ManyToOne(() => User, (user) => user.id)
    recipient: User

    @CreateDateColumn()
    created_at: Date
}

export { Transaction }