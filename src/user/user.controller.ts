import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post, Query } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid"
import { CostomValidationPipe } from "./pipes/validation.pipe";
import { UserService } from "./users.service";

@Controller("users")
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Get('findAll')
  //try to use CostomValidationPipe
  findAllUsers(@Query('username', CostomValidationPipe) username: string): UserEntity[] {
    return this.userService.findUsers()
  }

  @Get('findOne/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string): UserEntity {
    return this.userService.findUserById(id)
  }

  @Post('create')
  create(
    @Body()
    createUserDto: CreateUserDto
  ) {
    return this.userService.createUser(createUserDto)
  }

  @Patch('update/:id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body()
    updateUserDto: UpdateUserDto
  ) {
    return this.userService.updateUser(id, updateUserDto)
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    this.userService.deleteUser(id)
  }

}