import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { routes } from "./routes";
import { AppDataSource_ } from "./database/source_migrations/data-source";
import { AppDataSource } from "./database/data-source";

class App {
    private server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
        this.connectionDb()
    }

    private middleware(): void {
        this.server.use(express.json());
    }

    private routes(): void {
        this.server.use(routes);
    }

    private connectionDb(): void {
        AppDataSource_.initialize().then(() => console.log(`DB initialize`)).catch((error) => console.log(`DB error: ${error}`));
        AppDataSource.initialize().then(() => console.log(`DB initialize`)).catch((error) => console.log(`DB error: ${error}`));
    }

    initialize(): void {
        let port = process.env.PORT;
        this.server.listen(port, () => console.log(`Server on: http://localhost:${port}`));
    }
}



export {
    App
}
