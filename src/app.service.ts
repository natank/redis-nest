import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('REDIS_CLIENT' ) private redisClient){}

  getHello(): string {
    return 'Hello World!';
  }
  async setKey(setKeyDto: any): Promise<string> {
    try {
      await this.redisClient.set(setKeyDto.key, setKeyDto.value)
    } catch (error) {
      return error;
    }
    try {
     const value = await this.redisClient.get(setKeyDto.key)
      return `key is ${setKeyDto.key}, value stored is ${value}` 
    } catch (error) {
      return error;
    }
  }

  async produceMessage(message: string) {

  }
}
