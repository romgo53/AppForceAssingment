import { Department } from "../models/department.model";
import { DepartmentService } from "../services/department.service";
import { Request, Response } from "express";
import { DepartmentDtos } from "../dtos/department.dtos";


export class DepartmentController {
    private departmentService: DepartmentService = new DepartmentService();
   
    public getAllDepartments = async (request: Request, response: Response) => {
        const departments = await this.departmentService.getAllDepartments();
        response.send(departments);
    }

    public getDepartmentById = async (request: Request, response: Response) => {
        const [department] = await this.departmentService.getDepartmentById(request.params.id)
        .catch((err) => {
            response.status(400).send({details: err.sqlMessage, message: "Unable to get department"});
            return;
        });
        if (department){
            response.send(department);
        } else {
            response.status(404).send({message: "Department not found", details: `Department id ${request.params.id} does not exist`});
        }
    }

    public createDepartment = async (request: Request, response: Response) => {
        const department: DepartmentDtos = request.body;
        if(DepartmentDtos.validate(department)){
            response.status(400).send({details: DepartmentDtos.validate(department), message: "Unable to create department"});
            return;
        }
        const newDepartment = await this.departmentService.createDepartment(department)
        .catch((err) => {
            response.status(400).send({details: err.sqlMessage, message: "Unable to get department"});
            return;
        });;
        response.send(newDepartment);
    }

    public updateDepartment = async (request: Request, response: Response) => {
        const department: DepartmentDtos = request.body;
        if(DepartmentDtos.validate(department)){
            response.status(400).send({details: DepartmentDtos.validate(department), message: "Unable to create department"});
            return;
        }
        const updatedDepartment = await this.departmentService.updateDepartment(request.params.id, department)
        .catch((err) => {
            response.status(400).send({details: err.sqlMessage, message: "Unable to update department"});
            return;
        });
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