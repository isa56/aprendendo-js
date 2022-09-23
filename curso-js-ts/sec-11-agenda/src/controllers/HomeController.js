const Contact = require("../models/ContactModel");

exports.index = async (req, res) => {
  let contacts = await Contact.getContacts();

  res.render("index", {
    contacts,
  });
  return;
};
