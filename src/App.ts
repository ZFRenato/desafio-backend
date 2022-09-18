import "dotenv/config";
import express from "express";
import { routes } from "./routes";

class App {
    private server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.server.use(express.json());
    }

    private routes(): void {
        this.server.use(routes);
    }

    initialize(): void {
        let port = process.env.PORT;
        this.server.listen(port, () => console.log(`Server on: http://localhost:${port}`));
    }
}

export {
    App
}
