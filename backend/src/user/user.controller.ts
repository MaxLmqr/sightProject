import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Post('create')
  async signupUser(
    @Body()
    userData: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Delete('delete')
  async deleteUser(
    @Body()
    userId: {
      id: number;
    },
  ): Promise<UserModel> {
    return this.userService.deleteUser(userId);
  }
}
