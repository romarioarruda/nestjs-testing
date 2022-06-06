import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutosController } from './produtos.controller';
import { AppService } from './app.service';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
