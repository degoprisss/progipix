import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { configSwagger } from './configuration/swagger.config';

async function bootstrap() {

  const config = new ConfigService();
  
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });

  configSwagger(app)

  const port = config.get<string>('PORT')

  await app.listen(port || 4000);

}

bootstrap();
