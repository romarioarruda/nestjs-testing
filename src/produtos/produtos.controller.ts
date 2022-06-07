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
  fetchOne(@Param() params: any): Produto {
    return this.produtoService.fetchOne(params.id)
  }

  @Post()
  create(@Body() produto: Produto): void {
    this.produtoService.create(produto)
  }

  @Put(':id')
  update(@Param() params:any, @Body() produto: Produto) {
    this.produtoService.update(params.id, produto)
  }

  @Delete(':id')
  delete(@Param() params: any): void {
    this.produtoService.delete(params.id)
  }
}
