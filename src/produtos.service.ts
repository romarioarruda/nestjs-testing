import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";


@Injectable()
export class ProdutosService {
  private produtos: Produto[] = [
    new Produto('LIV01', 'Livro de TDD e BDD', 29.9),
    new Produto('LIV02', 'Livro de DDD', 39.9),
    new Produto('LIV03', 'Livro de Clean Arch', 19.9),
  ]

  fetchAll(): Produto[] {
    return this.produtos
  }

  fetchOne(id: string): Produto {
    return this.produtos.find((prod: Produto) => prod.codigo === id)
  }

  create(produto: Produto): void {
    this.produtos.push(produto)
  }

  update(id:string, produto: Produto) {
    console.log('Update::: ', id, produto)
  }

  delete(id:string): void {
    console.log('Deleting:: ', id)
  }
}
