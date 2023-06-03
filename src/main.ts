/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';

import * as mysqlDriver from 'mysql2';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });
  const AppDataSource = new DataSource({
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

  AppDataSource.initialize();

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
