import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SavePersonDto } from './dto/save-person.dto';
import { PersonEntity } from './person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
  ) {}

  async save(data: SavePersonDto): Promise<PersonEntity> {
    return this.personRepository.save(this.personRepository.create(data));
  }

  async find(): Promise<PersonEntity[]> {
    return this.personRepository.find();
  }
}
