import { Injectable } from '@angular/core';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class AutenticacaoService {

  private usuario: Usuario;
  private usuarioAutenticado: boolean = false;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  fazerLogin(usuarioInformado: Usuario){
    this.usuarioService.getUsuarioPorEmail(usuarioInformado.email)
    .then((usuario: Usuario[]) =>{
      
      this.usuario = usuario[0]
    })
  
    console.log(this.usuario.email)
    console.log(usuarioInformado.email)
    if(usuarioInformado.email === this.usuario.email && 
      usuarioInformado.senha === this.usuario.senha){
      this.usuarioAutenticado = true;
      this.router.navigate(['/']);
    }
    
  }

}
