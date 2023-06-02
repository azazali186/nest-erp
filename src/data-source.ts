/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import * as mysqlDriver from 'mysql2';

const dataSource = new DataSource({
    driver: mysqlDriver,
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT, 10),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    synchronize: false,
    migrations: [__dirname + '/../../typeorm-migrations/*.{ts,js}'],
    entities: [__dirname + '/../**/entity/*.{ts,js}'],
});

dataSource.initialize();

module.exports = { dataSource };