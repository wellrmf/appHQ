import { Component, OnInit } from '@angular/core';
import { HistoriasService } from '../historias.service';
import { Historia } from '../shared/historia.model';

@Component({
  selector: 'app-minhas-historias',
  templateUrl: './minhas-historias.component.html',
  styleUrls: ['./minhas-historias.component.css'],
  providers: [HistoriasService]
})
export class MinhasHistoriasComponent implements OnInit {
  
  public historias: Historia[]

  constructor(private historiasService: HistoriasService) { }

  ngOnInit() {

    //this.historias = this.historiasService.getHistorias();
   
  }

}
