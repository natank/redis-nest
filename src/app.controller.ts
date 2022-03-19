import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AppService } from './app.service';

class SetKeyDto {
  @ApiProperty()
  key: string;
  @ApiProperty()
  value: any
}

class ProduceMessageDto {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':key')
  getKey(@Param('key') key: string): string {
    return `${key} value is val`
  }

  @Post('/produce')
  async produceMessage(@Body() produceMessageDto: ProduceMessageDto ) {
    return await this.appService.produceMessage(produceMessageDto.message);
  }
  @Post()
  async setKey(@Body() setKeyDto: SetKeyDto): Promise<string> {
    return await this.appService.setKey(setKeyDto);
  }
}