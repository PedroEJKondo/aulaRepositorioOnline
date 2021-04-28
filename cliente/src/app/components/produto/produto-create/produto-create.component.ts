import { ProdutoService } from './../../../core/service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';


@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {
 
  produto:Produto;
  nomeProduto:string;
  mensagem:boolean = false;

  constructor(private prodService:ProdutoService) { }

  ngOnInit(): void { 
    this.produto = new Produto();
  } 

  onSubmit(){
    this.prodService
    .post(this.produto)
    .subscribe(response => {
      console.log(response);
      this.nomeProduto = response.nome;
      this.mensagem = true;
      this.onReload();
    }); 
  }

  onReload(){
    this.produto = new Produto();
  }
}
