import { CustomError } from "./custom-error";

export class InvalidEnvironmentVariableError extends CustomError{
    statusCode: number = 500;
    constructor(message: string) {
        super(message);
    }
}