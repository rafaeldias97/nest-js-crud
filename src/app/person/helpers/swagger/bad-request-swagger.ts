import { ApiProperty } from '@nestjs/swagger';

export class BadRequestSwagger {
  @ApiProperty({ default: 400 })
  statusCode: number;
  @ApiProperty({ default: "['']" })
  message: string[];
  @ApiProperty()
  error: string;
}
