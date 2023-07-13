import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { UserEntity } from "./user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }