import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const configSwagger = async (app) => {

    app.enableCors({
        origin: '*',
    });

    const config = new DocumentBuilder()
        .setTitle('ProgiPix')
        .addBearerAuth()
        .setDescription('Documentación de ProgiPix.')
        .setVersion('0.0.1')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    console.log('http://localhost:3000/api/v1/progipix/docs/');
    

    return SwaggerModule.setup('api/v1/progipix/docs', app, document);

}