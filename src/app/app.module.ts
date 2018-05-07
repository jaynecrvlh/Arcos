import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartaoComponent } from './cartao/cartao.component';
import { CriarSecaoComponent } from './criar-secao/criar-secao.component';
import { SecoesComponent } from './secoes/secoes.component';
import { routing } from './app.routing';
import { BotaoComponent } from './botao/botao.component';
import { GerarCodigoComponent } from './gerar-codigo/gerar-codigo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CartaoComponent,
    CriarSecaoComponent,
    SecoesComponent,
    BotaoComponent,
    GerarCodigoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
