// Error class
class ErrorResponse extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}
// Export module
module.exports = ErrorResponse;
