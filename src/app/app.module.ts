import { AddDicasComponent } from './page-criar-secao/add-dicas/add-dicas.component';
import { GerarCodigoComponent } from './page-criar-secao/gerar-codigo/gerar-codigo.component';
import { BotaoComponent } from './page-criar-secao/botao/botao.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from '././page-inicial/header/header.component';
import { NavbarComponent } from '././page-inicial/navbar/navbar.component';

import { SecoesComponent } from './secoes/secoes.component';
import { CartaoComponent } from '././secoes/cartao/cartao.component';


import { FormInicialComponent } from './form-inicial/form-inicial.component';
import { AppService } from './app.service';
import { PageApresentacaoComponent } from './page-apresentacao/page-apresentacao.component';
import { PageInicialComponent } from './page-inicial/page-inicial.component';
import { EntrarComponent } from './form-inicial/entrar/entrar.component';
import { CadastrarComponent } from './form-inicial/cadastrar/cadastrar.component';
import { BotaoInicialComponent } from './form-inicial/botao-inicial/botao-inicial.component';

import { PageCriarSecaoComponent } from './page-criar-secao/page-criar-secao.component';
import { CriarSecaoComponent } from './page-criar-secao/criar-secao/criar-secao.component';
import { DetalhesSecoesComponent } from './secoes/detalhes-secoes/detalhes-secoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CartaoComponent,
    CriarSecaoComponent,
    SecoesComponent,
    BotaoComponent,
    GerarCodigoComponent,
    PageApresentacaoComponent,
    PageInicialComponent,
    FormInicialComponent,
    BotaoInicialComponent,
    EntrarComponent,
    CadastrarComponent,
    AddDicasComponent,
    PageCriarSecaoComponent,
    DetalhesSecoesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ],
  providers: [AppService, AddDicasComponent, GerarCodigoComponent, NavbarComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
