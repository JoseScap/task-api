import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(32)
  readonly task: string;
  @IsOptional()
  @IsString()
  @MaxLength(256)
  readonly description: string;
  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  readonly done: boolean;
}
