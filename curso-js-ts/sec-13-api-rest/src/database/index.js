import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Student from '../models/Student';

const models = [Student];

const connection = new Sequelize(dbConfig);

models.forEach((model) => model.init(connection));
