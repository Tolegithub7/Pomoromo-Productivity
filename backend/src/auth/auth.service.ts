import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(): { msg: string } | PromiseLike<{ msg: string }> {
    return { msg: 'User registered successfully' };
  }
}
