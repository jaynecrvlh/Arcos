import { Component, OnInit, Input, Output, EventEmitter, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppService } from '../.././app.service';
import { AddDicasComponent } from '../add-dicas/add-dicas.component';
import { Cartao } from '../../modelos/cartao.model';
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
  @Output() enviarInfo = new EventEmitter<Cartao>();

  constructor(private addDicas: AddDicasComponent) { }

  criarSecao1(e){
    

    event.preventDefault();
    console.log(e);
    console.log(this.titulo);
    console.log(this.descricao);
    console.log(this.opcao);
    // console.log(this.alternativa1);
    // console.log(this.alternativa2);
    // console.log(this.alternativa3);
    // console.log(this.alternativa4);
    this.palpite.push(this.alternativa1);
    this.palpite.push(this.alternativa2);
    this.palpite.push(this.alternativa3);
    this.palpite.push(this.alternativa4);
    // this.palpite[0] = this.alternativa1;
    // this.palpite[1] = this.alternativa2;
    // this.palpite[2] = this.alternativa3;
    // this.palpite[3] = this.alternativa4;
    console.log(this.palpite);
    this.enviarInfo.emit(new Cartao(this.titulo, new Date(), this.descricao, this.palpite, this.opcao, []));
    // this.addDicas.criarSecao2(this.titulo, this.descricao, this.palpite, this.opcao);
  }

  ngOnInit() {
  }

}
