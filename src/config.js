module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/usuarios",
  PORT: process.env.PORT || 4000,
  SK: process.env.SK,
  adminEmail: process.env.AdminEmail,
  adminPassword: process.env.adminPass,
};
