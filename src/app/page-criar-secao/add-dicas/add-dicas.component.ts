import { Component, OnInit, Output } from '@angular/core';
import { Cartao } from '../../modelos/cartao.model';
import { GerarCodigoComponent } from '../gerar-codigo/gerar-codigo.component';

@Component({
  selector: 'app-add-dicas',
  templateUrl: './add-dicas.component.html',
  styleUrls: ['./add-dicas.component.css']
})
export class AddDicasComponent implements OnInit {
  dicas: Array<string> = [];
  casa1: string;
  casa2: string;
  casa4: string;
  casa5: string;
  casa7: string;
  casa8: string;
  casa10: string;
  casa11: string;
  casa13: string;
  casa14: string;
  ttitulo: string;
  tdescricao: string;
  tpalpite: Array<string> = [];
  topcao: string;
  
  texto: string = "Utilize o conteúdo da aula como base nas dicas que cadastrar";

  constructor(private gerarCodigo: GerarCodigoComponent) { }

  ngOnInit() {
  }

    clicou(texto: string){
    this.texto = texto;
    console.log(texto);
  }

  criarSecao2(titulo, descricao, palpite, opcao){
    console.log("chegou aqui add");
    console.log(titulo, descricao, palpite, opcao);
    this.ttitulo = titulo;
    this.tdescricao = descricao;
    this.tpalpite = palpite;
    this.topcao = opcao;
    console.log(this.ttitulo, this.tdescricao, this.tpalpite, this.topcao);
  }

  criarSecao3(e){
    event.preventDefault();

    this.dicas.push(this.casa1);
    this.dicas.push(this.casa2);
    this.dicas.push(this.casa4);
    this.dicas.push(this.casa5);
    this.dicas.push(this.casa7);
    this.dicas.push(this.casa8);
    this.dicas.push(this.casa10);
    this.dicas.push(this.casa11);
    this.dicas.push(this.casa13);
    this.dicas.push(this.casa14);
    // this.gerarCodigo.criarSecao4(this.dicas, this.ttitulo, this.tpalpite, this.topcao, this.tdescricao);
    console.log(this.dicas);
    console.log(this.ttitulo);
  }
}
