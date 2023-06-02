/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() userData: User): Promise<string> {
    const user = await this.authService.findByUsername(userData.email);
    if (!user) {
      throw new Error('Invalid username or password');
    }

    const isPasswordValid = await bcrypt.compare(
      userData.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new Error('Invalid username or password');
    }

    return 'Login successful';
  }

  @Post('register')
  async register(@Body() userData: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = new User();
    user.email = userData.email;
    user.password = hashedPassword;
    return this.authService.register(user);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(id);
  }

}
