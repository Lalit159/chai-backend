class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = (statusCode<400) //Read HTTP status codes
        // >=400 status code denotes an error in web
    }
}