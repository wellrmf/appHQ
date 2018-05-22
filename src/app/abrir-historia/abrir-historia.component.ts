import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HistoriasService } from '../historias.service';
import { Historia } from '../shared/historia.model';
import { Categoria } from '../shared/categoria.model';
import { CategoriasService } from '../categorias.service';
import { CapitulosService } from '../capitulos.service';
import { Capitulo } from '../shared/capitulo.model';

@Component({
  selector: 'app-abrir-historia',
  templateUrl: './abrir-historia.component.html',
  styleUrls: ['./abrir-historia.component.css'],
  providers: [HistoriasService, CategoriasService, CapitulosService]
})
export class AbrirHistoriaComponent implements OnInit {

  public historia: Historia[];
  public idHistoria: number;
  public inscricaoId: Subscription;
  public categorias: Categoria[];
  public capitulos: Capitulo[];


  constructor(private rota: ActivatedRoute, private historiasService: HistoriasService, private categoriasService: CategoriasService, private capitulosService: CapitulosService) { }
  

  ngOnInit() {
    //pegando o parametro id de params enviado pelo componente left-menu
    this.inscricaoId = this.rota.params.subscribe(
      (params: any)=> {
        this.idHistoria = params['id'];
        console.log(this.idHistoria)
      }
    )

    //pegando apenas as historias com o Id da categoria
    this.historiasService.getHistoriaPorId(this.idHistoria)
    .then((historia: Historia[]) =>{
      this.historia = historia;
    })

    this.categoriasService.getCategorias()
    .then((categorias: Categoria[])=>{
        this.categorias =categorias;
    })
    .catch((param: any)=>{
        console.log(param);
    })

    this.capitulosService.getCapitulosPorIdHistoria(this.idHistoria)
    .then((capitulo: Capitulo[])=>{
      this.capitulos = capitulo;
    })

  }

}
