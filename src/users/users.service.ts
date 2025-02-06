import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usern } from './entities/user.entity';
import {Repository} from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Usern) private usersRepository:Repository<Usern>){}

 async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.save(createUserDto);
  }

   async findAll() {
    return await this.usersRepository.find();
  }

 async findOne(id: number) {
    return await `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await `This action updates a #${id} user`;
  }

   async remove(id: number) {
    return await `This action removes a #${id} user`;
  }
}
