import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.json({ errors: ['ID não enviado.'] });
      const user = await User.findByPk(id);
      if (user) {
        return res.json(user);
      }
      return res.json({ errors: ['Usuário não encontrado.'] });
    } catch (error) {
      return res.json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.json({ errors: ['ID não enviado.'] });
      const user = await User.findByPk(id);
      if (user) {
        const userUpdated = await user.update(req.body);
        return res.json(userUpdated);
      }
      return res.status(404).json({ errors: ['Usuário não encontrado.'] });
    } catch (e) {
      return res
        .status(400)
        .json({ errors: ['Não foi possível atualizar o usuário'] });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.json({ errors: ['ID não enviado.'] });
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy();
        return res.json(user);
      }
      return res.status(404).json({ errors: ['Usuário não encontrado.'] });
    } catch (error) {
      return res.json(null);
    }
  }
}

export default new UserController();
