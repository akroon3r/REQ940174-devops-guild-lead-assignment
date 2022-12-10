import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Guild Lead Assignment API')
    .setDescription('Sample API')
    .setVersion('1.0')
    .addTag('Guild Lead Assignment API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  

  await app.listen(3000);
  console.log('The Guild Lead Assignment API is live and serving traffic on port 3000')
}
bootstrap();
