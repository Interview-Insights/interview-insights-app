import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  CustomAPIError,
  UnAuthenticatedError,
} from '../errors/index.js';
import attachCookies from '../utils/attachCookies.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
    throw new BadRequestError('Please provide a name');
  }
  if (!email || !password) {
    throw new CustomAPIError('Email and password are required');
  }

  // check if user exists
  const userAlreadyExists = false;

  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }

  // create new user and save to db

  attachCookies({ res, token });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Email and password are required');
  }

  // retrieve user from db

  attachCookies({ res, token });
  const userData = { name: user.name, email: user.email };
  res.status(StatusCodes.OK).json({ user: userData });
};

const updateUser = async (req, res) => {
  const { name, email, newEmail } = req.body;

  if (!name) {
    throw new BadRequestError('Please provide a name');
  }

  if (!email) {
    throw new BadRequestError('Please provide an email');
  }

  if (!newEmail) {
    throw new BadRequestError('Please provide an email');
  }

  const userData = { name: user.name, email: user.email };

  attachCookies({ res, token });
  res.status(StatusCodes.OK).json({ user: userData });
};

const getCurrentUser = async (req, res) => {
  const { id } = req.user;

  if (!id) {
    throw new UnAuthenticatedError('User id not found');
  }

  res.status(StatusCodes.OK).json({ user: userData });
};

const logout = async (_req, res) => {
  res.clearCookie('token', { httpOnly: true });
  res.status(StatusCodes.OK).json({ message: 'Logged out' });
};

export { register, login, updateUser, getCurrentUser, logout };
