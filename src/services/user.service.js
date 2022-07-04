import User from '../models/user.model';

export const registerUser = async (body) => {
  const data = await User.create(body);
  return data;
};

