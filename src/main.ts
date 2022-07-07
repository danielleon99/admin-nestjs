import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const configServices: ConfigService = app.get(ConfigService)
  await app.listen(configServices.get("POR"));
  logger.log(`App running on: ${await app.getUrl()}`)
}
bootstrap();
