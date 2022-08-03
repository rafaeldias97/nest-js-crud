import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SavePersonDto } from './dto/save-person.dto';
import { BadRequestSwagger } from './helpers/swagger/bad-request-swagger';
import { NotFoundSwagger } from './helpers/swagger/not-found-swagger';
import { PersonService } from './person.service';
import { IndexPersonSwagger } from './swagger/index-person.swagger';

@Controller('api/v1/person')
@ApiTags('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({
    status: 201,
    description: 'Create with success',
    type: IndexPersonSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid Params',
    type: BadRequestSwagger,
  })
  async save(@Body() body: SavePersonDto) {
    return this.personService.save(body);
  }

  @Get()
  @ApiOperation({ summary: 'List all users' })
  @ApiResponse({
    status: 200,
    description: 'List users',
    type: IndexPersonSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    type: NotFoundSwagger,
  })
  async get() {
    return this.personService.find();
  }
}
