import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';

const auth = async (req, _res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    throw new UnAuthenticatedError(
      'Not token provided. Authentication invalid'
    );
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = { id: payload.userId };
  } catch (error) {
    throw new UnAuthenticatedError('Authentication invalid');
  }
  next();
};

export default auth;
