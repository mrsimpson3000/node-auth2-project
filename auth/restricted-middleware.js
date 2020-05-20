const jwt = require("jsonwebtoken");
const configVars = require("../config/vars");

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, configVars.jwtSecret, (err, decodedToken) => {
      if (err) {
        // the token is invalid
        res.status(401).json({ message: "You shall not pass!" });
      } else {
        // the token is valid
        req.jwt = decodedToken;
        next();
      }
    });
  } else {
    res
      .status(400)
      .json({ message: "Please provide the authentication information." });
  }
};
