import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Usuario } from './shared/usuario.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioService {

  constructor(private http: Http){}

  public getUsuarioPorEmail(email: string): Promise<Usuario[]>{
    return this.http.get(`http://localhost:3000/usuario?email=${email}`)
        .toPromise()
        .then((resposta: any)=> resposta.json())
} 

}
