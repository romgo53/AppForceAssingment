import { DepartmentDtos } from "@/dtos/department.dtos";
import { Department } from "@/models/department.model";
import db from "../config/db.config";
export class DepartmentService {
    async getAllDepartments() {
         
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM department", (err, results) => {
                if (err) {
                    reject(err);
                }

                resolve(results);
            });
        });
    }

    async getDepartmentById(id: string): Promise<Department[] | any> {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM department where id = ${id}`, (err, results) => {
                if (err) {
                    reject(err);
                }

                resolve(results);
            });
        });
    }

    async createDepartment(department: DepartmentDtos) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO department SET ?", [department], (err, results) => {
                if (err) {
                    reject(err);
                }

                resolve(results);
            });
        });
    }

    async updateDepartment(id: string, department: DepartmentDtos) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE department SET ? WHERE id = ?", [department, id], (err, results) => {
                if (err) {
                    reject(err);
                }

                resolve(results);
            });
        });
    }

    async deleteDepartment(id: string) {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM department WHERE id = ?", [id], (err, results) => {
                if (err) {
                    reject(err);
                }

                resolve(results);
            });
        }
        );
    }

    async getDepartmentUserCount() {
        return new Promise((resolve, reject) => {
            db.query("SELECT d.id, d.name, COUNT(u.id) AS userCount FROM department d LEFT JOIN user u ON d.id = u.departmentId GROUP BY d.id", (err, results) => {
                if (err) {
                    reject(err);
                }

                resolve(results);
            });
        });
    }
    
    
}