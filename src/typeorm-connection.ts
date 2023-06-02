/* eslint-disable prettier/prettier */
import { createConnection } from 'typeorm';

export async function createTypeORMConnection() {
  await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nest-microservices',
    entities: [__dirname + '*/entities/*.ts'], // Path to your Logger entity file
    synchronize: true, // Set to false in production
  });
}
