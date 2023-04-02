export interface DepartmentDtos {
    name: string;
    description: string;
}

export namespace DepartmentDtos {
    export function validate(department: DepartmentDtos): string | undefined {
        if(!!department.name || department.name.length < 2){
            return "Department name is required and must be at least 2 characters long";
        }
    }
}