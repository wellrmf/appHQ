import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Categoria } from './shared/categoria.model';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class CategoriasService{

    constructor(private http: Http){}
    
    
    public getCategorias(): Promise<Categoria[]>{
        return this.http.get('http://localhost:3000/categoria')
            .toPromise()
            .then((resposta:any) => resposta.json())
    }
}