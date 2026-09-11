import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserDto } from './dto/user.dto.js';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findbyId(@Param('id') id: string) {
  //   return this.userService.findById(id);
  // }

  // @Post()
  // create(@Body() dto: UserDto) {
  //   return this.userService.create(dto);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() dto: UserDto) {
  //   return this.userService.update(id, dto);
  // }

  // @Delete(':id')
  // delete(@Param('id') id: string) {
  //   return this.userService.delete(id);
  // }
}
