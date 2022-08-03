import { Test, TestingModule } from '@nestjs/testing';
import { SavePersonDto } from './dto/save-person.dto';
import { PersonController } from './person.controller';
import { PersonEntity } from './person.entity';
import { PersonService } from './person.service';

describe('PersonController', () => {
  let personController: PersonController;
  let personService: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [
        {
          provide: PersonService,
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    personController = module.get<PersonController>(PersonController);
    personService = module.get<PersonService>(PersonService);
  });

  it('should be defined', () => {
    expect(personController).toBeDefined();
    expect(personService).toBeDefined();
  });

  describe('save', () => {
    it('should save a new person with success', async () => {
      // Arrange
      const data: SavePersonDto = {
        name: 'Rafael Dias',
        birthDate: '1997-03-24',
        email: 'antonio.dias@kovi.com.br',
        password: '123456',
      };
      const personEntityMock = {
        name: 'Rafael Dias',
        birthDate: '1997-03-24',
        status: 'ACTIVE',
      } as PersonEntity;
      jest.spyOn(personService, 'save').mockResolvedValueOnce(personEntityMock);
      // Act
      const result = await personController.save(data);
      // Assert
      expect(result).toBeDefined();
      expect(personService.save).toBeCalledTimes(1);
    });
  });

  describe('get', () => {
    it('should find persons with success', async () => {
      // Arrange
      const personEntityMock = [
        {
          name: 'Rafael Dias',
          birthDate: '1997-03-24',
          status: 'ACTIVE',
        },
      ] as PersonEntity[];
      jest.spyOn(personService, 'find').mockResolvedValueOnce(personEntityMock);
      // Act
      const result = await personController.get();
      // Assert
      expect(result).toBeDefined();
      expect(personService.find).toBeCalledTimes(1);
    });
  });
});
