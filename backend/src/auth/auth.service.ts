import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { JwtPayload } from './types/jwt-payload';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.user({ email });

    if (user) {
      const success = await bcrypt.compare(password, user.password);
      if (success) {
        return user;
      }
    }
  }

  async login(user: User) {
    const payload: JwtPayload = { email: user.email, id: user.id };

    return {
      statusCode: HttpStatus.OK,
      access_token: this.jwtService.sign(payload),
    };
  }
}
