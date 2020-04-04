import { Router } from "express";
import Usercontroller from "./app/controllers/UserController";
import Sessioncontroller from "./app/controllers/SessionController";
import Filecontroller from "./app/controllers/FileController";

import authMiddleware from "./app/middlewares/auth";
import multer from "multer";
import multerConfig from "./config/multer";

const routes = new Router();
const upload = multer(multerConfig);
routes.post("/users", Usercontroller.store);
routes.post("/sessions", Sessioncontroller.store);
routes.use(authMiddleware);
routes.put("/users", Usercontroller.update);
routes.post("/files", upload.single("file"), Filecontroller.store);

export default routes;
