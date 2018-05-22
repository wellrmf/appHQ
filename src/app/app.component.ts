import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public idCategoria: number;
  public categoriaId: Subscription;

  // constructor(private rota: ActivatedRoute, private router: Router) {
  //   this.categoriaId = this.rota.params.subscribe(
  //     params=> {
  //       let id = this.router.url.split('/');
  //       this.idCategoria = parseInt(id[2]);
  //       console.log(this.rota.params);
  //       console.log('id da rota')
  //     }
  //   )
  //  }
}
