import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SavePersonDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty({ default: '1997-03-24' })
  birthDate: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ default: 'teste@teste.com' })
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
