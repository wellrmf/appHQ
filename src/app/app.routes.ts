import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
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

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'login', component: LoginComponent},
    {path: 'configConta', component: ConfigUsuarioComponent},
    {path: 'publicarHistoria', component: PublicarHistoriaComponent },
    {path: 'publicarCapitulo', component: PublicarCapituloComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'editarHistoria', component: EditarHistoriaComponent},
    {path: 'lerHistoria/:id', component: AbrirHistoriaComponent},
    {path: 'minhasHistorias', component: MinhasHistoriasComponent},
    {path: 'historias', component: HistoriasComponent},
    {path: 'categoria/:id', component: HistoriaIdCategoriaComponent},
    {path: 'lerCapitulo/:id', component: AbrirCapituloComponent}
]