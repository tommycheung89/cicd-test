import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .setTitle('Kin Food Hall backend API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('Kin Food Hall')
    .build();