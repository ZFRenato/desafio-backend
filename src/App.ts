import "dotenv/config";
import express from "express";

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

    }

    initialize(): void {
        let port = process.env.PORT;
        this.server.listen(port, () => console.log(`Server on: http://localhost:${port}`));
    }
}

export {
    App
}
