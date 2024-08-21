import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
//https://soshace.com/2024/01/30/nest-js-and-aws-lambda-for-serverless-microservices/
//AKIAXYKJVQ37EISWICBK
//BwNM/vUdVRPNutmU1zuUM6nnQooJzMz6hy9j4TgF
