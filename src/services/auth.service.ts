/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private authRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  async register(user: CreateUserDto): Promise<User> {
    let data: any;
    await this.dataSource.transaction(async (manager) => {
      try {
        data = await manager.save(user);
      } catch (error) {
        data = { error: error.sqlMessage, code: error.code };
      }
    });
    return data;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.authRepository.findOne({
      where: {
        email: username,
      },
    });
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: string) {
    return `This action returns a #${id} auth`;
  }
}
