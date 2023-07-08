import { Controller, Get, Post } from "@nestjs/common";

@Controller("users")
export class UserController{
  @Get()
  findAllUsers(): String[]{
    return ["Basma", "Khaleel","Tasnim"]
  }

  @Post()
  CreateNewUser(): String{
    return "Create new User"
  }
}