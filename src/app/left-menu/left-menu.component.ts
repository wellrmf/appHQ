import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Categoria } from '../shared/categoria.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { QueryList } from '@angular/core';

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

  @ViewChildren('lista') 
  listaItens: QueryList<ElementRef>;
  
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

    this.categoriaId = CategoriasService.alteraLeftMenu.subscribe(
      data=> {

        console.log(data);
        console.log('id da categoria que foi fechada  ^')
        console.log(this.listaItens)
 

        this.listaItens["_result"].forEach(function(item) {
          if(item.nativeElement.id == data.id){
            console.log(item);
            item.nativeElement.className = "list-group-item list-group-item-action";
            console.log(item);
          }
        });
      }
    )
  }


  ngOnDestroy(){
    this.categoriaId.unsubscribe();
  }
}
