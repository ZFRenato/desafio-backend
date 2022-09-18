import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../modules/users/entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "dbUser",
    password: "user1590",
    database: "database_banck",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: ["src/database/migration/**/*.ts"],
    subscribers: ["src/database/migration/**/*.ts"],
})
