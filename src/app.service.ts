import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient } from 'redis'

@Injectable()
export class AppService implements OnModuleInit {
  redisClient;

  async onModuleInit() {
    this.redisClient = createClient({
      url: 'redis://:mypassword@localhost:6379'
    });
    this.redisClient.on('error', (err)=> console.log('Redis Client Error', err));
    try {

      await this.redisClient.connect();
    } catch(error) {
      console.log(error)
    }
    
  }
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
}
