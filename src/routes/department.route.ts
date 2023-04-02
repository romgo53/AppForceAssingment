import { Router } from "express";
import { DepartmentController } from "../controllers/department.controller";

export const departmentRouter = Router();

const departmentController = new DepartmentController();

departmentRouter.get("/", departmentController.getAllDepartments);

departmentRouter.get("/byId/:id", departmentController.getDepartmentById);

departmentRouter.post("/", departmentController.createDepartment);

departmentRouter.put("/:id", departmentController.updateDepartment);

departmentRouter.delete("/:id", departmentController.deleteDepartment);

departmentRouter.get("/usercount", departmentController.getDepartmentUserCount);