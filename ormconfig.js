/* eslint-disable prettier/prettier */
module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "",
  "database": "nest-microservices",
  "synchronize": true,
  "logging": true,
  "autoLoadEntities": true,
  "entities": ["./src/**/entities/*.entity{.ts,.js}"],
  "migrations": ["src/migration/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts"],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
};
