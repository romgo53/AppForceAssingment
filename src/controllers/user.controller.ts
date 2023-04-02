import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
import { Request, Response } from 'express';
import { UserDtos } from '../dtos/user.dtos';
import { UserService } from '../services/user.service';
import { User } from '../models/user.models';
import { Filter } from "../models/filter.models";

@Route("users")
export class UserController {
    private userService: UserService = new UserService();
    @Get("/")
    public getAllUsers = async (request: Request, response: Response) => {
        const users = await this.userService.getAllUsers(Filter.fromQueryParam(request.query));
        // const users = await this.userService.getAlltest();
        response.send(users);
    }

    public getUserById = async (request: Request, response: Response) => {
        const [user] = await this.userService.getUserById(request.params.id);
        if (user) {
            response.send(user);
        } else {
            response.status(404).send({message: "User not found", details: `User id ${request.params.id} does not exist`});
        }
    }

    public createUser = async (request: Request, response: Response) => {
        const user: UserDtos = request.body;
        const res = UserDtos.validate(user);
        if (res) {
            response.status(400).send({details: res, message: "Unable to create user"});
            return;
        }
        const newUser = await this.userService.createUser(user).catch((err) => {
            response.status(400).send({details: err.sqlMessage, message: "Unable to create user"});
            return;
        });
        response.status(201).send(newUser);
    }

    public updateUser = async (request: Request, response: Response) => {
        const user: UserDtos = request.body;
        const updatedUser = await this.userService.updateUser(request.params.id, user);
        if (updatedUser) {
            response.send(updatedUser);
        } else {
            response.status(404).send();
        }
    }

    public deleteUser = async (request: Request, response: Response) => {
        const id: number = +request.params.id;
        const successResponse = await this.userService.deleteUser(id);
        if (successResponse) {
            response.status(204).send();
        } else {
            response.status(404).send();
        }
    }
}