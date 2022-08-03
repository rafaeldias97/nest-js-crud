import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './app/person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'postgres',
      port: 5432,
      username: 'postgres',
      password: '123456789',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
    PersonModule,
  ],
})
export class AppModule {}
