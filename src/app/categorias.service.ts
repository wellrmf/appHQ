import { Http } from '@angular/http';
import { Injectable, Input, EventEmitter } from '@angular/core';
import { Categoria } from './shared/categoria.model';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class CategoriasService{

    constructor(private http: Http){}
    
    @Input()
    static alteraLeftMenu = new EventEmitter<any>();
    
    public getCategorias(): Promise<Categoria[]>{
        return this.http.get('http://localhost:3000/categoria')
            .toPromise()
            .then((resposta:any) => resposta.json())
    }
}