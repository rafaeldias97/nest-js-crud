import { Body, Controller, Get, Post } from '@nestjs/common';
import { SavePersonDto } from './dto/save-person.dto';
import { PersonService } from './person.service';

@Controller('api/v1/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async save(@Body() body: SavePersonDto) {
    return this.personService.save(body);
  }

  @Get()
  async get() {
    return this.personService.find();
  }
}
