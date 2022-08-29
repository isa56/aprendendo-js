module.exports.firstMiddleware = (req, res, next) => {
  // req.session = { name: "Isadora", lastName: "Ferreira" };
  console.log("\nMy First Middleware\n");
  next();
}

module.exports.global = (req, res, next) => {
  res.locals.localVariable = "Local Variable created by global middleware";
  console.log("\nMiddleware Global");
  next();
}

exports.checkCsrfError = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.render("error", { error: "Invalid CSRF Token" });
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};