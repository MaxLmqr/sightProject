import { JwtAuthGuard } from './../auth/strategies/jwt-auth.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserPersonalData } from './interfaces/user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUser(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserPersonalData> {
    const user = await this.userService.publicUser({
      id,
    });
    return user;
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
