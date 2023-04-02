export interface UserDtos {
    firstName?: string;
    lastName?: string;
    title?: string;
    email?: string;
    image?: string;
    departmentId?: number;
}

export namespace UserDtos {
    export function validate(user: UserDtos): string | undefined {
        if(!!user.firstName && user.firstName.length < 2){
            return "First name is required and must be at least 2 characters long";
        }
        if(!!user.lastName && user.lastName.length < 2){
            return "Last name is required and must be at least 2 characters long";
        }
        // validate email check for @ and .
        if(!!user.email && user.email.length < 5){
            return "Email is required and must be at least 5 characters long";
        }
        // check that the email is in this format string@string.string
        if(!!user.email && (!user.email.includes("@") || !user.email.includes("."))){
            return "Invalid email format";
        }
    }
}