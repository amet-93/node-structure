const Auth = require("../app/controllers/AuthController");
const verifyToken = require("../app/middleware/auth");


/**
 * To be shifted in main code
 */

module.exports = (app) => {
  // app.get("/", (req, res) => {
  //   res.json({
  //     info: "Node.js, Express, and Postgres API",
  //   });
  // });

  /**
   * Auth Routes
   */

  app.post("/register", Auth.register);
};
