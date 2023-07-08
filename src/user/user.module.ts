import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./users.service";

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }