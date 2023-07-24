import {Application} from "express";
import IntegerRouter from "./modules/Integer/integer.router";

export default function createRoutes(app: Application) {
    app.use('/integer', IntegerRouter)
    // other routes ...

}