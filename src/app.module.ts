import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisClient } from './redisClient';
import { KafkaModule } from './kafka/kafka.module';
import { TestConsumer } from './test.consumer';
@Module({
  imports: [KafkaModule],
  controllers: [AppController],
  providers: [AppService, RedisClient, TestConsumer],
})
export class AppModule {}
