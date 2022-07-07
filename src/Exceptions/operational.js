// X means exception
module.exports = class X extends Error{
    constructor(message, code) {
        super(message)
        this.message = message;
        this.statusCode = code;
        this.isOperational = true;
        this.status = `${this.code}`.startsWith('4') ? 'fail' : 'error';
        Error.captureStackTrace(this, this.constructor)
    }
}