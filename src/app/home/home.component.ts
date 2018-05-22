import { Component, OnInit } from '@angular/core';
import { HistoriasService } from '../historias.service';
import { Historia } from '../shared/historia.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HistoriasService ]
})
export class HomeComponent implements OnInit {

  public historias: Historia[];

  constructor(private historiasService: HistoriasService) { }

  ngOnInit() {
    
    this.historiasService.getHistoriasDestaque()
      .then(
        (historias: Historia[]) => { 
          this.historias = historias;}  
      )
      .catch(
        (param: any) => {
          console.log(param)}
      )
  }

}
