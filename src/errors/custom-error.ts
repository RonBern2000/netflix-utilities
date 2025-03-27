abstract class CustomError extends Error{
    abstract statusCode: number;
    constructor(message: string){
        super(message);
        this.message = message;
    }
}

export default CustomError;