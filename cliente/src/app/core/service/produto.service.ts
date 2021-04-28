import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceService } from '../provide/http/api-service.service';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public params = new HttpParams();
 
  constructor(private api:ApiServiceService) { }

  /*** Listagem de todos os produtos */
  public index():any{return this.api.get('/produtos');}

  /** Visualizar um produto apenas */
  public show(params:any):any{return this.api.get('/produtos/'+params);}

  /** Registar um produto */
  public post(produto):any{ return this.api.post('/produtos',produto); }

  /** Actualizar um produto */
  public put(produto, params):any{ return this.api.put('/produtos/'+params,produto); }
  
  /** Eliminar um produto */
  public delete(params):any{return this.api.delete('/produtos/'+params);}
}


