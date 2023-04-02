import { UserDtos } from "../dtos/user.dtos";
import { User } from "../models/user.models";
import db from "../config/db.config";
import { Filter } from "../models/filter.models";
import { RowDataPacket } from "mysql2";

export class UserService {
  async getAllUsers(filterQuery: string) {
    return new Promise((resolve, reject) => {
      db.query(`SELECT user.*, department.name AS departmentName FROM company.user
       LEFT JOIN company.department ON user.departmentId = department.id ${filterQuery}`,
       (err, results) => {
        if (err) {
          reject(err);
        }

        resolve(results);
      });
    });
  }
  async getAlltest() {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM user`, (err, results) => {
        if (err) {
          reject(err);
        }

        resolve(results);
      });
    });
  }
  async getUserById(id: string): Promise<RowDataPacket[] | any> {
    return new Promise((resolve, reject) => {
      db.query(`SELECT user.*, department.name AS departmentName FROM 
      company.user LEFT JOIN company.department ON user.departmentId = department.id WHERE user.id = ${id}`, (err, results) => {
        if (err) {
          reject(err);
        }

        resolve(results);
      });
    });
  }
  async createUser(user: UserDtos) {

    return new Promise((resolve, reject) => {
      db.query("INSERT INTO user SET ?", [user], (err, results) => {
        if (err) {
          reject (err);
        }

        resolve(results);
      });
    });

  }
  async updateUser(id: string, user: UserDtos) {

    return new Promise((resolve, reject) => {
      db.query("UPDATE user SET ? WHERE id = ?", [user, id], (err, results) => {
        if (err) {
          reject(err);
        }

        resolve(results);
      });
    });
  }
  async deleteUser(id: number) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM user WHERE id = ?", [id], (err, results) => {
        if (err) {
          reject(err);
        }

        resolve(results);
      });
    });
  }
}
