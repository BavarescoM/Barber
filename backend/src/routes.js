import { Router } from "express";
import Usercontroller from "./app/controllers/UserController";
import Sessioncontroller from "./app/controllers/SessionController";
import authMiddleware from "./app/middlewares/auth";
const routes = new Router();

routes.post("/users", Usercontroller.store);
routes.post("/sessions", Sessioncontroller.store);
routes.use(authMiddleware);
routes.put("/users", Usercontroller.update);

export default routes;
