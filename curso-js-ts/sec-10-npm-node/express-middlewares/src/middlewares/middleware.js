module.exports.firstMiddleware = (req, res, next) => {
  // req.session = { name: "Isadora", lastName: "Ferreira" };
  // console.log("\nMy First Middleware\n");
  next();
}

module.exports.global = (req, res, next) => {
  console.log("\nMiddleware Global");
  next();
}