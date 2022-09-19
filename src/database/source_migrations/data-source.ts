import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "dbUser",
    password: "user1590",
    database: "database_banck",
    synchronize: true,
    logging: false,
    entities: ["src/database/modules/users/entities/*.ts"],
    migrations: ["src/database/migration/**/*.ts"],
    subscribers: ["src/database/migration/**/*.ts"],
})
