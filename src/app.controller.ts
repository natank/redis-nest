import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AppService } from './app.service';

class SetKeyDto {
  @ApiProperty()
  key: string;
  @ApiProperty()
  value: any
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  on
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':key')
  getKey(@Param('key') key: string): string {
    return `${key} value is val`
  }

  @Post()
  async setKey(@Body() setKeyDto: SetKeyDto): Promise<string> {
    return await this.appService.setKey(setKeyDto);
  }
}