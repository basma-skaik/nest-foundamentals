import { IsString, Length, IsEmail, IsNumber } from "class-validator";

export class CreateUserDto {
  // readonly because we don't have any busness logic
  @IsString()
  @Length(3, 20)
  readonly username: string;

  @IsNumber()
  readonly age: number;

  @IsEmail({}, { message: 'Email not valid' })
  readonly email: string;
}