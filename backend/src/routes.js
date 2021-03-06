import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";
import ProviderController from "./app/controllers/ProviderController";
import NotificationController from "./app/controllers/NotificationController";

import authMiddleware from "./app/middlewares/auth";
import multer from "multer";
import multerConfig from "./config/multer";
import AppoinmentController from "./app/controllers/AppointmentController";
import ScheduleController from "./app/controllers/ScheduleController";
import AvailableController from "./app/controllers/AvailableController";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);
routes.get("/providers", ProviderController.index);
routes.get("/providers/:providerId/available", AvailableController.index);

routes.post("/files", upload.single("file"), FileController.store);

routes.post("/appointments", AppoinmentController.store);
routes.get("/appointments", AppoinmentController.index);
routes.delete("/appointments/:id", AppoinmentController.delete);

routes.put("/users", UserController.update);
routes.get("/schedule", ScheduleController.index);
routes.get("/notifications", NotificationController.index);
routes.put("/notifications/:id", NotificationController.update);

export default routes;
