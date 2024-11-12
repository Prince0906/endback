import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServerlessAdapter } from '@nestjs/platform-serverless';

export const handler = async (event, context) => {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const serverlessHandler = ServerlessAdapter.getHandler(app);
  return serverlessHandler(event, context);
};
