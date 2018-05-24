import { Component, OnInit } from '@angular/core';
import { Historia } from '../shared/historia.model';
import { HistoriasService } from '../historias.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-historia-id-categoria',
  templateUrl: './historia-id-categoria.component.html',
  styleUrls: ['./historia-id-categoria.component.css'],
  providers: [ HistoriasService]
})
export class HistoriaIdCategoriaComponent implements OnInit {

  public historias: Historia[];
  public idCategoria: number;
  public inscricaoId: Subscription;

  constructor(private rota: ActivatedRoute, private historiasService: HistoriasService, private categoriasService: CategoriasService) {
     
   }

  ngOnInit() {
    
    //pegando o parametro id de params enviado pelo componente left-menu
    this.inscricaoId = this.rota.params.subscribe(
      (params: any)=> {
        this.idCategoria = params['id'];
        console.log(this.idCategoria);
       
        //pegando apenas as historias com o Id da categoria
        console.log('está vindo a primeira vez buscar as historias pelo id')
        this.historiasService.getHistoriasPorIdCategorias(this.idCategoria)
        .then((historias: Historia[]) =>{
          this.historias = historias
          console.log(this.historias)
        })
      }
    )
  }

  ngOnDestroy(){
    this.inscricaoId.unsubscribe();
    CategoriasService.alteraLeftMenu.emit({id: this.idCategoria});
  }

}
