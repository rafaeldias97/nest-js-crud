import { IsEmail, IsNotEmpty } from 'class-validator';

export class SavePersonDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  birthDate: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
