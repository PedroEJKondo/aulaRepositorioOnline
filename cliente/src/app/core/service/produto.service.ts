import { Injectable } from '@angular/core';
import { ApiServiceService } from '../provide/http/api-service.service';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private api:ApiServiceService) { }

  public index():any{return this.api.index('/produtos');}
}


