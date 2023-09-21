import { DataSource } from 'typeorm';
import * as mysqlDriver from 'mysql2';

const dataSource = new DataSource({
  driver: mysqlDriver,
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nest-erp',
  synchronize: false,
  migrations: [__dirname + '/../../typeorm-migrations/*.{ts,js}'],
  entities: [__dirname + '/**/**/entities/*.{ts,js}'],
});

dataSource.initialize();

module.exports = { dataSource };
