import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-inicial',
  templateUrl: './form-inicial.component.html',
  styleUrls: ['./form-inicial.component.css']
})
export class FormInicialComponent implements OnInit {

  entrarAtivo = true;
  cadastrarAtivo = false;

  ativarEntrar(){
    this.entrarAtivo = true;
    this.cadastrarAtivo = false;
  }

  ativarCadastrar(){
    this.cadastrarAtivo = true;
    this.entrarAtivo = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
