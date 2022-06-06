import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

  @Get()
  fetchAll(): string {
    return 'Rota de todos os produtos'
  }

  @Get(':id')
  fetchOne(@Param() params: any): string {
    return 'Rota de um produto: ' + params.id
  }

  @Post()
  create(@Body() produto: any): string {
    console.log(produto)
    return 'Rota cria um produto: '
  }

  @Put(':id')
  update(@Body() produto: any): string {
    console.log(produto)
    return 'Rota atualiza um produto: '
  }

  @Delete(':id')
  delete(@Param() params: any): string {
    return 'Rota deleta um produto: ' + params.id
  }
}