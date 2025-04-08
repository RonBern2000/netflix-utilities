import {CustomError} from './custom-error';

export class BadRequestError extends CustomError{
    statusCode: number = 400;
    constructor(message: string) {
        super(message);
    }
}

export class InvalidEnvironmentVariableError extends CustomError{
    statusCode: number = 500;
    constructor(message: string) {
        super(message);
    }
}