import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias: any[] =[];
  loading = false;

  private _noticiasService: any;

  constructor(private _noticiaService: NoticiaService){
  }

  buscarNoticias(parametros: any){
    this.loading = true;
    this.listNoticias = [];

    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(data => {
        this.loading = false;
        console.log(data);
        this.listNoticias = data.articles;
      }, error => {
        this.loading = false;
        console.log(error);
      })
    }, 1000);
  }
}
//api key 4bca193f573e49f89071bf87c6d73357
