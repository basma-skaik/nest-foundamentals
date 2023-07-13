import { Injectable, NotFoundException } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>) { }

  findUsers(email: string) {
    return this.repo.findBy({ email });
  }

  findUserById(id: string) {
    return this.repo.findOneBy({ id })
  }

  createUser(username: string, age: number, email: string) {
    const newUser = this.repo.create({ username, age, email })

    return this.repo.save(newUser)
  }

  async updateUser(id: string, attrs: Partial<UserEntity>) {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('user not found!')
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async deleteUser(id: string) {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('user not found!')
    }

    return this.repo.remove(user)
  }

}