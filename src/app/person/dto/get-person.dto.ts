import { StatusEnum } from '../enum/status.enum';

export class GetPersonDto {
  name: string;
  birthDate: string;
  status: StatusEnum;
  email: string;
  password: string;
}
