import { Department } from "../models/department.model";
import { DepartmentService } from "../services/department.service";
import { Request, Response } from "express";


export class DepartmentController {
    private departmentService: DepartmentService = new DepartmentService();
   
    public getAllDepartments = async (request: Request, response: Response) => {
        const departments = await this.departmentService.getAllDepartments();
        response.send(departments);
    }

    public getDepartmentById = async (request: Request, response: Response) => {
        const [department] = await this.departmentService.getDepartmentById(request.params.id);
        if (department){
            response.send(department);
        } else {
            response.status(404).send({message: "Department not found", details: `Department id ${request.params.id} does not exist`});
        }
    }

    public createDepartment = async (department: Department) => {
        const newDepartment = await this.departmentService.createDepartment(department);
        return newDepartment;
    }

    public updateDepartment = async (request: Request, response: Response) => {
        const updatedDepartment = await this.departmentService.updateDepartment(request.params.id, request.body);
        response.send(updatedDepartment);
    }

    public deleteDepartment = async (request: Request, response: Response) =>{
        const successResponse = await this.departmentService.deleteDepartment(request.params.id)
        response.send(successResponse);
    }

    public getDepartmentUserCount = async (request: Request, response: Response) => {
        const departments = await this.departmentService.getDepartmentUserCount();
        response.send(departments);
    }


}