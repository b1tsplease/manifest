module.exports = {
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: process.env.DATABASE_HOST || "localhost",
        port: process.env.DATABASE_PORT || 5432,
        database: process.env.DATABASE_NAME || "manifest",
        username: process.env.DATABASE_USERNAME || "quero",
        password: process.env.DATABASE_PASSWORD || "quero",
        schema: "public",
        ssl: { rejectUnauthorized: false }
      },
      options: {}
    }
  }
};
