import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private servico: AppService) { }

  secaoAtivo = true;
  criarAtivo = false;

  ativarSecao(){
    this.secaoAtivo = true;
    this.criarAtivo = false;
    this.servico.getSecoes();

  }

  ativarCriar(){
    this.criarAtivo = true;
    this.secaoAtivo = false;
  }

  ngOnInit() {
  }

}
