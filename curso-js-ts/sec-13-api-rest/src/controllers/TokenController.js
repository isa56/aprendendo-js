import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({ errors: ['Credenciais inválidas'] });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ errors: ['Usuário não existe'] });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({ errors: ['Senha inválida'] });
      }

      const token = jwt.sign({ id: user.id, email }, process.env.TOKEN_SECRET, {});

      return res.json({ user, token });
    } catch (error) {
      return res.status(401).json({ errors: error });
    }
  }
}

export default new TokenController();
