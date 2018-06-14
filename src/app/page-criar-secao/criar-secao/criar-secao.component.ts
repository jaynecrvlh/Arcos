import { Component, OnInit, Input, Output, EventEmitter, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppService } from '../.././app.service';
import { AddDicasComponent } from '../add-dicas/add-dicas.component';
import { Cartao } from '../../modelos/cartao.model';
import { Router } from '@angular/router';
// import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-criar-secao',
  templateUrl: './criar-secao.component.html',
  styleUrls: ['./criar-secao.component.css']
})
export class CriarSecaoComponent implements OnInit {
  palpite: Array<string> = [];
  titulo: string;
  descricao: string;
  alternativa1: string;
  alternativa2: string;
  alternativa3: string;
  alternativa4: string;
  opcao: number;

  constructor(private addDicas: AddDicasComponent, private router: Router) { }

  criarSecao1(e){
    event.preventDefault();
    this.palpite.push(this.alternativa1);
    this.palpite.push(this.alternativa2);
    this.palpite.push(this.alternativa3);
    this.palpite.push(this.alternativa4);
    this.router.navigate(['/pagina-inicial','criarsecao','addDicas'], { queryParams: { titulo:this.titulo, descricao: this.descricao, palpite: this.palpite, opcao: this.opcao}});
  }

  ngOnInit() {
  }

}
