import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  register(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
