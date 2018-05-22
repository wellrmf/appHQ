import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Categoria } from '../shared/categoria.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  providers: [CategoriasService]
})
export class LeftMenuComponent implements OnInit {

  public categorias: Categoria[];
  public idCategoria: number;
  public categoriaId: Subscription;

  constructor(private rota: ActivatedRoute, private router: Router,private categoriasService: CategoriasService) { }

  ngOnInit() {

    this.categoriasService.getCategorias()
      .then(
        (categorias: Categoria[])=>{
          this.categorias =categorias;
        }
      )
      .catch(
        (param: any)=>{
          console.log(param);
        }
      )
      console.log(this.rota);

      
    this.categoriaId = this.rota.params.subscribe(
      params=> {
       
        console.log(params['id']);
        console.log('id da rota')
      }
    )

  }


  ngOnDestroy(){
    this.categoriaId.unsubscribe();
  }
}
