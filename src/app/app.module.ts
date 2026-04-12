import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { TarefaFormComponent } from './componentes/tarefa-form/tarefa-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    TarefaFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  exports: [HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
