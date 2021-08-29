import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
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

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };

    return {
      statusCode: HttpStatus.OK,
      access_token: this.jwtService.sign(payload),
    };
  }
}
