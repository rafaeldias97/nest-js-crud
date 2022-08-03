import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SavePersonDto } from './dto/save-person.dto';
import { PersonEntity } from './person.entity';
import { PersonService } from './person.service';

describe('PersonService', () => {
  let personService: PersonService;
  let personRepository: Repository<PersonEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonService,
        {
          provide: getRepositoryToken(PersonEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    personService = module.get<PersonService>(PersonService);
    personRepository = module.get<Repository<PersonEntity>>(
      getRepositoryToken(PersonEntity),
    );
  });

  it('should be defined', () => {
    expect(personService).toBeDefined();
    expect(personRepository).toBeDefined();
  });

  describe('save', () => {
    it('should save a new person success', async () => {
      // Arrange
      const data: SavePersonDto = {
        name: 'Rafael Dias',
        birthDate: '1997-03-24',
        email: 'teste@teste.com',
        password: '123456',
      };
      const dataEntityMock = {
        name: 'Rafael Dias',
        birthDate: '1997-03-24',
        status: 'ACTIVE',
      } as PersonEntity;
      jest
        .spyOn(personRepository, 'create')
        .mockReturnValueOnce(dataEntityMock);
      jest
        .spyOn(personRepository, 'save')
        .mockResolvedValueOnce(dataEntityMock);
      // Act
      const result = await personService.save(data);
      // Assert
      expect(result).toBeDefined();
      expect(personRepository.create).toBeCalledTimes(1);
      expect(personRepository.save).toBeCalledTimes(1);
    });

    describe('get', () => {
      it('should return persons success', async () => {
        // Arrange
        const dataEntityMock = [
          {
            name: 'Rafael Dias',
            birthDate: '1997-03-24',
            status: 'ACTIVE',
          },
        ] as PersonEntity[];
        jest
          .spyOn(personRepository, 'find')
          .mockResolvedValueOnce(dataEntityMock);
        // Act
        const result = await personService.find();
        // Assert
        expect(result).toBeDefined();
        expect(personRepository.find).toBeCalledTimes(1);
      });
    });
  });
});
