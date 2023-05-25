import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './custom-api.js';

class UnAuthenticatedError extends CustomAPIError {
  constructor(message = 'Invalid credentials') {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export default UnAuthenticatedError;
