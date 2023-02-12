import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  readonly firstname: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
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
