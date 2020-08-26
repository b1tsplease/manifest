const adminJwtSecret = require("crypto").randomBytes(64).toString("base64");

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", adminJwtSecret)
    }
  }
});
