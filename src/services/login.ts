import User from '../models/users';
import auth from '../utils/auth/jsonWebToken';

const login = async (email: string, password: string) => {
  const user = await User.findOne({ where: { email } });

  if (!user) return false;

  const token = auth.createToken(user);
  const payload = { ...user, token };
  return payload;
};

export default {
  login,
};
