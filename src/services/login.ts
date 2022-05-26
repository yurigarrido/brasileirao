import User from '../models/users';
import auth from '../utils/auth/jsonWebToken';

const login = async (email: string, password: string) => {
  const user = await User.findOne({ where: { email, password }, raw: true, attributes: { exclude: ['password'] } });

  if (!user) return false;

  const token = auth.createToken(user);

  return { ...user, token };
};

export default {
  login,
};
