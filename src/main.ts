import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({ origin: '*' });
  const port = process.env.PORT || 3000;
  if (!process.env.IP) await app.listen(port, process.env.IP);
  else await app.listen(port);
}
bootstrap();
