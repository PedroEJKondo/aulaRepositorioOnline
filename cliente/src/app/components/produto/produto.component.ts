import { ProdutoService } from './../../core/service/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public prods = [];

  constructor(private prodService:ProdutoService) { }

  ngOnInit(): void {
    this.prodService
    .index()
    .subscribe(arg => {
      this.prods = arg.data;
    });
  }

}
