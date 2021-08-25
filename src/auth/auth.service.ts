import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  signUp(authCredentials: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentials);
  }

  async signIn(
    authCredentials: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentials;

    const user = await this.usersRepository.findOne({ username });

    if (user) {
      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (isCorrectPassword) {
        const payload: JwtPayload = { username };
        const accessToken = this.jwtService.sign(payload);
        return { accessToken };
      }
    }

    throw new UnauthorizedException('Username or password mismatch');
  }
}
