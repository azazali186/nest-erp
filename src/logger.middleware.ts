/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { createTypeORMConnection } from './typeorm-connection';
import { Logger } from './loggers/entities/loggers.entities';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    await createTypeORMConnection();

    // Create a new logger entry
    const logger = new Logger();
    logger.timestamp = new Date();
    logger.userAgent = req.headers['user-agent'];
    logger.clientIP = req.connection.remoteAddress;

    // Save the logger entry to the database
    
    await logger.save();

    res.status(200).json({ success: true });
    next();
  }
}
