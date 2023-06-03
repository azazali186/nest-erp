import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private permissionsRepository: Repository<Permission>,
  ) {}

  create(createPermissionDto: CreatePermissionDto) {
    return 'This action adds a new permission';
  }

  findAll() {
    return `This action returns all permissions`;
  }

  findOne(id: string) {
    return `This action returns a #${id} permission`;
  }

  update(id: string, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

  remove(id: string) {
    return `This action removes a #${id} permission`;
  }
}
