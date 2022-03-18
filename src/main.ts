import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Redis demo')
    .setDescription('Demo of Redis db')
    .setVersion('1.0')
    .addTag('Redis')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)
  app.enableShutdownHooks();

  await app.listen(3000);
}
bootstrap();
