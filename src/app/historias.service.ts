import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Historia } from './shared/historia.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HistoriasService{

    constructor(private http: Http){}

   
   
    public getHistoriasDestaque(): Promise<Historia[]>{
        //efetuar uma requisição http 
        return this.http.get('http://localhost:3000/historia?destaque=true')
            .toPromise()
            .then((resposta: any)=> resposta.json())
        //retornar uma promise Historias[]
    }

    public getHistorias(): Promise<Historia[]>{
        return this.http.get(`http://localhost:3000/historia`)
            .toPromise()
            .then((resposta: any)=> resposta.json())
    }

    public getHistoriasPorIdCategorias(idCategoria: number): Promise<Historia[]>{
        return this.http.get(`http://localhost:3000/historia?categoria=${idCategoria}`)
            .toPromise()
            .then((resposta: any)=> resposta.json())
    } 

    public getHistoriaPorId(idHistoria: number): Promise<Historia[]>{
        return this.http.get(`http://localhost:3000/historia?id=${idHistoria}`)
            .toPromise()
            .then((resposta: any)=> resposta.json())
    } 

}