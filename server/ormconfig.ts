const { DB_USERNAME, DB_PW, DB_SCHEMA, DB_HOST, DB_PORT } = process.env;

export = {
  type: "mysql",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PW,
  database: DB_SCHEMA,
  synchronize: true,
  logging: false,
  entities: ["src/entity/index.ts"]
};
