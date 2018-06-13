import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-gerar-codigo',
  templateUrl: './gerar-codigo.component.html',
  styleUrls: ['./gerar-codigo.component.css']
})
export class GerarCodigoComponent implements OnInit {
  titulo: string;
  descricao: string;
  palpite: Array<string> = [];
  opcao: number;
  dicas: Array<string> = [];

  constructor(private service: AppService) { }

  ngOnInit() {
  }

  // criarSecao4(titulo, descricao, palpite, opcao, dicas){
  //   this.titulo = titulo;
  //   this.descricao = descricao;
  //   this.palpite = palpite;
  //   this.opcao = opcao;
  //   this.dicas = dicas;
  // }

  // criarSecao5(){
  //   console.log(this.titulo);
  //   console.log(this.descricao);
  //   console.log(this.palpite);
  //   console.log(this.opcao);
  //   console.log(this.dicas);
  // }

  criarSecao6(e){
    console.log("entrou")
    this.titulo = e.titulo;
    console.log(this.titulo);
  }

}
