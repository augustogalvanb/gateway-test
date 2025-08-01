import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = env.port;
  await app.listen(port);
  console.log(`✅Servidor Gateway HTTP escuchando en ${env.backUrl}${port}`);
}
bootstrap();
