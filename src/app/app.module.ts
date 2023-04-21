import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { ListadoNoticiasComponent } from './componets/listado-noticias/listado-noticias.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
