const ErrorResponse = require('../utils/errorResponse');
//  @desc   Upload files
//  @route  POST /
//  @access Private
exports.uploadFiles = (req, res, next) => {
	const { file, fileValidationError } = req;
	if (!file) return next(new ErrorResponse('No file submitted', 400));
	if (fileValidationError)
		return next(new ErrorResponse(fileValidationError, 400));
	return res
		.status(201)
		.send({ location: `http://localhost:4000/${req.file.filename}` });
};
