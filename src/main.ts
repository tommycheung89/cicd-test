import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 8000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
}
bootstrap();
