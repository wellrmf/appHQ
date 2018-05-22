import { Component, OnInit } from '@angular/core';
import { Capitulo } from '../shared/capitulo.model';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { CapitulosService } from '../capitulos.service';

@Component({
  selector: 'app-abrir-capitulo',
  templateUrl: './abrir-capitulo.component.html',
  styleUrls: ['./abrir-capitulo.component.css'],
  providers:[CapitulosService]
})
export class AbrirCapituloComponent implements OnInit {

  public capitulo: Capitulo = new Capitulo;
  public idHistoria: number;
  public inscricaoId: Subscription;

  constructor(private rota: ActivatedRoute, private capitulosService: CapitulosService) { }

  ngOnInit() {

    //pegando o parametro id de params enviado pelo componente historia-id-categoria
    this.inscricaoId = this.rota.params.subscribe(
      (params: any)=> {
        this.idHistoria = params['id'];
        console.log(this.idHistoria)
      }
    )

    this.capitulosService.getCapituloPorId(this.idHistoria)
    .then((capitulo: Capitulo)=>{
      this.capitulo = capitulo;
      console.log(this.capitulo)
    })
  }

}
