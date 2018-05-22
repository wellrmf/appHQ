import { Component, OnInit } from '@angular/core';
import { Historia } from '../shared/historia.model';
import { HistoriasService } from '../historias.service';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css'],
  providers: [ HistoriasService]
})
export class HistoriasComponent implements OnInit {

  public historias: Historia[];

  constructor(private historiasService: HistoriasService) { }

  ngOnInit() {
    this.historiasService.getHistorias()
      .then((historias: Historia[]) =>{
        this.historias = historias
      })
  }

}
