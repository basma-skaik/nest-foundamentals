import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./users.service";

@Controller("users")
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Get('/findAll')
  //try to use CostomValidationPipe here if u want
  async findAllUsers(@Query('email') email: string) {
    const users = await this.userService.findUsers(email)
    if (!users) {
      throw new NotFoundException('users not found!')
    }
    return users;
  }

  @Get('/findOne/:id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findUserById(id)
    if (!user) {
      throw new NotFoundException('user not found!')
    }
    return user;
  }

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto.username, createUserDto.age, createUserDto.email)
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto)
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    this.userService.deleteUser(id)
  }

}