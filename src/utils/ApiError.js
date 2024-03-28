//In JavaScript, when you're dealing with error objects and stack traces, the parameters are typically standardized.

class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong", // Generalised error message
        errors = [], // error details OR additional errors
        stack = "" // the sequence of function calls that led to the current point in the code where the error or issue occurred
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
        
        if(stack){ // returns true when no stack trace (stack parameter) is provided or is provided and empty
            this.stack = stack

        }
        else{
            Error.captureStackTrace(this, this.constructor) // captures current stack-trace
        }
    }
}

export {ApiError} // Named export