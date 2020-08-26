const jwtSecret = require("uuid").v4();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || jwtSecret
};
