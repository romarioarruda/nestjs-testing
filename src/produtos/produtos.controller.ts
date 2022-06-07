import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtoService: ProdutosService) {}

  @Get()
  fetchAll(): Produto[] {
    return this.produtoService.fetchAll()
  }

  @Get(':id')
  fetchOne(@Param('id') id: string): Produto {
    return this.produtoService.fetchOne(id)
  }

  @Post()
  create(@Body() produto: Produto): void {
    this.produtoService.create(produto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() produto: Produto) {
    this.produtoService.update(id, produto)
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.produtoService.delete(id)
  }
}
