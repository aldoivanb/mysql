import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usern } from './users/entities/user.entity';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'apires.croiwkokku5r.us-east-2.rds.amazonaws.com',
      port:3306,
      username:'admin',
      password:'6D6vS6gStEjeiMqEbODv',
      database:'apinestjsDB',
      entities:[Usern],
      synchronize:true
    })
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
