import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          defaultValue: '',
          type: Sequelize.STRING,
          validate: {
            len: {
              args: [2, 255],
              msg: 'Campo nome deve ter entre 2 e 255 caracteres.',
            },
          },
        },
        email: {
          defaultValue: '',
          type: Sequelize.STRING,
          unique: {
            msg: 'Email já cadastrado.',
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido.',
            },
          },
        },
        password: {
          defaultValue: '',
          type: Sequelize.VIRTUAL,
          validate: {
            len: {
              args: [5, 255],
              msg: 'Campo senha deve ter entre 5 e 255 caracteres.',
            },
          },
        },
        password_hash: {
          defaultValue: '',
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      },
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
