import { StatusCodes } from 'http-status-codes';

class CustomAPIError extends Error {
  constructor(message, statusCode = StatusCodes.INTERNAL_SERVER_ERROR) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default CustomAPIError;
