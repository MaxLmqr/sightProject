import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<UserModel[]>;
    signupUser(userData: CreateUserDto): Promise<UserModel>;
    deleteUser(userId: {
        id: number;
    }): Promise<UserModel>;
}
