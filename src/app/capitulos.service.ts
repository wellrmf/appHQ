import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Capitulo } from './shared/capitulo.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CapitulosService{

    constructor(private http: Http){}


   
    public getCapitulos(): Promise<Capitulo[]>{
        return this.http.get(`http://localhost:3000/capitulo`)
            .toPromise()
            .then((resposta: any)=> resposta.json())
    }

    public getCapitulosPorIdHistoria(IdHistoria: number): Promise<Capitulo[]>{
        return this.http.get(`http://localhost:3000/capitulo?id_historia=${IdHistoria}`)
            .toPromise()
            .then((resposta: any)=> resposta.json())
    } 

    public getCapituloPorId(idCapitulo: number): Promise<Capitulo>{
        return this.http.get(`http://localhost:3000/capitulo?id=${idCapitulo}`)
            .toPromise()
            .then((resposta: any)=> {return resposta.json()[0]})
    } 
    

}