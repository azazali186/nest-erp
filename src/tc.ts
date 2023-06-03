/* eslint-disable prettier/prettier */
import { createConnection } from 'typeorm';

export async function createTypeORMConnection() {
  await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nest-erp',
    entities: [__dirname + '/auth-service/src/**/entities/*.{js,ts}'], // Path to your Logger entity file
    synchronize: true, // Set to false in production
  });
}
