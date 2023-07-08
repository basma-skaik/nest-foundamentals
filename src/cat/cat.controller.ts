/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  @Post('create')
  create(@Body() createCatDto: CreateCatDto) {
    return `This action adds a new cat`;
  }

  @Get('findAll')
  findAll(@Query() query: ListAllEntities) {
    return `This action return all cats (limit: ${query.limit} items)`;
  }

  @Get('findById/:id')
  findOne(@Param('id') id: string) {
    return `This action returns a # ${id} cat`;
  }

  @Put('UpdateById/:id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a # ${id} cat`;
  }

  @Delete('deleteById/:id')
  remove(@Param('id') id: string) {
    return `This action deletes a ${id} cat`;
  }
}
