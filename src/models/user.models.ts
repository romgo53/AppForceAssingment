import { Department } from './department.model';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    image: string;
    department: Department;
}