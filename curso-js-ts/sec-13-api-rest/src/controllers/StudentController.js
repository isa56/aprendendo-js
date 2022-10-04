import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const student = await Student.create({
      name: 'John',
      surname: 'Doe',
      email: 'john@doe',
      age: 20,
      weight: 80.5,
      height: 1.8,
    });
    res.json(student);
  }
}

export default new StudentController();
