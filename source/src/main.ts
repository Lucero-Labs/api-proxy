import { NestFactory } from '@nestjs/core';
import { AppModule } from './modena-resolver.module';
import { mappingConfig } from './config';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
export const ENVIROMENT = mappingConfig();
bootstrap();
