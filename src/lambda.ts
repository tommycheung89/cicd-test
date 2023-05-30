import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from './app.module';
import { swaggerConfig } from './swagger.config';
import { SwaggerModule } from '@nestjs/swagger';

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    expressApp.listen(process.env.PORT);
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp)
    );
    nestApp.use(eventContext());
    const document = SwaggerModule.createDocument(nestApp, swaggerConfig);
    SwaggerModule.setup('api', nestApp, document);
    await nestApp.init();
    cachedServer = createServer(expressApp, undefined);
  }
  return cachedServer;
}

export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
