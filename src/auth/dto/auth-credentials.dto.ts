import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(6)
  @MaxLength(128)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak',
  }) // https://gist.github.com/arielweinberger/18a29bfa17072444d45adaeeb8e92ddc
  password: string;
}
