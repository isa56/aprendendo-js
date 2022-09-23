const Contact = require("../models/ContactModel");

exports.index = (req, res) => {
  const contact = new Contact();
  res.render("contact-form", {
    contact: {},
  });
  return;
};

exports.editIndex = async (req, res) => {
  try {
    const contact = await Contact.getContactById(
      req.params.id,
      req.session.user._id
    );

    res.render("contact-form", { contact });
  } catch (err) {
    console.log(err);
    return res.render("404");
  }
};

exports.create = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.create();

    if (contact.errors.length > 0) {
      req.flash("errors", contact.errors);
      req.session.save(function () {
        return res.redirect("back");
      });
      return;
    }

    req.flash("success", "Contato criado com sucesso.");
    req.session.save(() =>
      res.redirect(`/contact/form/${contact.contact._id}`)
    );
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.update = async (req, res) => {

  try {
    if (!req.params.id) return res.render("404");

    const contact = new Contact(req.body);
    await contact.update(req.params.id);

    if (contact.errors.length > 0) {
      req.flash("errors", contact.errors);
      req.session.save(function () {
        return res.redirect("back");
      });
      return;
    }

    req.flash("success", "Contato atualizado com sucesso.");
    req.session.save(() => res.redirect("back"));
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.delete = async (req, res) => {
  try {
    if (!req.params.id) return res.render("404");

    const contact = await Contact.delete(req.params.id);
    if (!contact) return res.render("404");

    req.flash("success", "Contato excluído com sucesso.");
    req.session.save(() => res.redirect("back"));
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};
