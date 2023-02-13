import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  readonly username: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  readonly password: string;
}
