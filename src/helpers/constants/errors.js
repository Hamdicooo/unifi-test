const httpStatusCodes = require('./httpStatus');
const statusCodes = require('./statusCodes');

module.exports = {
	JSON_PARSE_ERROR: {
		httpStatus: httpStatusCodes.BAD_REQUEST,
		responseStatus: statusCodes.DEFAULT,
		errors: [{ msg: 'Unexpected token in JSON' }],
	},
	INVALID_CODE: {
		httpStatus: httpStatusCodes.UNAUTHORIZED,
		responseStatus: statusCodes.INVALID_CREDENTIAL,
		error: [{ msg: 'Invalid Code' }],
	},
	INVALID_PHONE: {
		httpStatus: httpStatusCodes.UNAUTHORIZED,
		responseStatus: statusCodes.INVALID_CREDENTIAL,
		error: [{ msg: 'Invalid phone number' }],
	},
	INVALID_AUTH_TOKEN: {
		httpStatus: httpStatusCodes.UNAUTHORIZED,
		responseStatus: statusCodes.INVALID_TOKEN,
		error: [{ msg: 'Invalid Auth Token' }],
	},
	ITEM_NOT_FOUND: {
		httpStatus: httpStatusCodes.BAD_REQUEST,
		responseStatus: statusCodes.ITEM_NOT_FOUND,
		error: [{ msg: 'Requested Item Not Found' }],
	},
	INPUT_ERROR: {
		httpStatus: httpStatusCodes.VALIDATION_ERROR,
		responseStatus: statusCodes.VALIDATION_ERROR,
		error: [{ msg: 'Input Error' }],
	},
	MULTER_LIMIT_FILE_SIZE: {
		httpStatus: httpStatusCodes.VALIDATION_ERROR,
		responseStatus: statusCodes.LIMIT_FILE_SIZE,
		error: [{ msg: 'File Size Exceed Size Limit' }],
	},
	MULTER_NON_SUPPORTED_FILE_TYPE: {
		httpStatus: httpStatusCodes.VALIDATION_ERROR,
		responseStatus: statusCodes.NON_SUPPORTED_FILE_TYPE,
		error: [{ msg: "Currently We Don't Support Uploaded File Type" }],
	},
	INTERNAL_SERVER_ERROR: {
		httpStatus: httpStatusCodes.INTERNAL_SERVER_ERROR,
		responseStatus: statusCodes.GENERAL_ERROR,
	},
	INVALID_EMAIL_OR_PASSWORD: {
		httpStatus: httpStatusCodes.UNAUTHORIZED,
		responseStatus: statusCodes.INVALID_CREDENTIAL,
		error: [{ msg: 'Invalid Phone or Password' }],
	},
	INVALID_PASSWORD: {
		httpStatus: httpStatusCodes.UNAUTHORIZED,
		responseStatus: statusCodes.INVALID_CREDENTIAL,
		error: [{ msg: 'Invalid Password' }],
	},
	DUPLICATED_ENTRY: {
		httpStatus: httpStatusCodes.DUPLICATED_ENTRY,
		responseStatus: statusCodes.VALIDATION_ERROR,
		error: [{ msg: 'what you are adding is already exist' }],
	},
};
