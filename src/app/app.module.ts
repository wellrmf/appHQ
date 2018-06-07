import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConfigUsuarioComponent } from './config-usuario/config-usuario.component';
import { PublicarHistoriaComponent } from './publicar-historia/publicar-historia.component';
import { PublicarCapituloComponent } from './publicar-capitulo/publicar-capitulo.component';
import { ContatoComponent } from './contato/contato.component';
import { EditarHistoriaComponent } from './editar-historia/editar-historia.component';
import { AbrirHistoriaComponent } from './abrir-historia/abrir-historia.component';
import { MinhasHistoriasComponent } from './minhas-historias/minhas-historias.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriaIdCategoriaComponent } from './historia-id-categoria/historia-id-categoria.component';
import { AbrirCapituloComponent } from './abrir-capitulo/abrir-capitulo.component';

import {CategoriasService} from './categorias.service';
import { AutenticacaoService } from './login/autenticacao.service';
import { HistoriasService } from './historias.service';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    LeftMenuComponent,
    LoginComponent,
    CadastroComponent,
    ConfigUsuarioComponent,
    PublicarHistoriaComponent,
    PublicarCapituloComponent,
    ContatoComponent,
    EditarHistoriaComponent,
    AbrirHistoriaComponent,
    MinhasHistoriasComponent,
    HistoriasComponent,
    HistoriaIdCategoriaComponent,
    AbrirCapituloComponent,  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [CategoriasService, 
              AutenticacaoService, 
              HistoriasService, 
              UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
