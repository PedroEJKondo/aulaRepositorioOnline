import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Produto } from 'src/app/models/Produto';
import { ApiServiceService } from '../provide/http/api-service.service';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public params = new HttpParams();
 
  constructor(private api:ApiServiceService) { }

  public index():any{return this.api.get('/produtos');}

  public show(params:any):any{return this.api.get('/produtos/',params);}

  public post(produto):any{
    return this.api.post('/produtos',produto);
  }

  public put(form: FormGroup, params):any{
    return this.api.put('/produtos/'+params,form.value);
  }
  
  public delete(params):any{return this.api.delete('/produtos/'+params);}
}


