import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly firstname: string;
  @IsNotEmpty()
  @IsString()
  readonly lastname: string;
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
