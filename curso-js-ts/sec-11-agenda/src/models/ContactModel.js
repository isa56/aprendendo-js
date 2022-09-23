const mongoose = require("mongoose");
const validator = require("validator");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: false, default: "" },
  email: { type: String, required: false, default: "" },
  phone: { type: String, required: false, default: "" },
  createdAt: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model("Contact", ContactSchema);

class Contact {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
  }

  async create() {
    this.validate();
    if (this.errors.length > 0) return;
    this.contact = await ContactModel.create(this.body);
  }

  async update(id) {
    if (typeof id !== "string") return;
    this.validate();
    if (this.errors.length > 0) return;
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, {
      new: true,
    });
  }

  static async delete(id) {
    if (typeof id !== "string") return;
    return await ContactModel.findOneAndDelete({ _id: id });
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }
    this.body = {
      name: this.body.name,
      lastName: this.body.lastName,
      email: this.body.email,
      phone: this.body.phone,
      password: this.body.password,
    };
  }

  validate() {
    this.cleanUp();
    // Validação
    // O e-mail precisa ser válido
    if (!this.body.name) this.errors.push("Nome é um campo obrigatório.");
    if (!this.body.email && !this.body.phone)
      this.errors.push(
        "Pelo menos um contato é obrigatório: E-mail ou Telefone."
      );

    if (this.body.email && !validator.isEmail(this.body.email))
      this.errors.push("E-mail inválido.");
  }

  static async getContactById(id) {
    if (typeof id !== "string") return;

    const contact = await ContactModel.findById(id);

    if (!contact) throw new Error("Contato não encontrado.");

    return contact;
  }

  static async getContacts() {
    return (await ContactModel.find().sort({ createdAt: -1 }));
  }
}

module.exports = Contact;
