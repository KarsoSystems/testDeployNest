import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// "sku": 7000001,
//     "descripcion": "Producto creado con auth",
//     "descripcion_larga": "Producto creado con auth",
//     "precio": 800,
//     "foto_principal": "resource.png",
//     "fotos": ["resource.png", "resource.png"],
//     "top": true,
//     "disponible": true,
//     "visible":false,
//     "file":

// aws_access_key_id = AKIAXYKJVQ37EISWICBK
// aws_secret_access_key = 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

// 3ArbAmogjOwyhO8TsSYH8k92TmI+UoEOrJLC5gBG
