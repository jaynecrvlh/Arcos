import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  secaoAtivo = true;
  criarAtivo = false;

  ativarSecao(){
    this.secaoAtivo = true;
    this.criarAtivo = false;
  }

  ativarCriar(){
    this.criarAtivo = true;
    this.secaoAtivo = false;
  }

  ngOnInit() {
  }

}
