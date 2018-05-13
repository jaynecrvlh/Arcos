import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-inicial',
  templateUrl: './botao-inicial.component.html',
  styleUrls: ['./botao-inicial.component.css']
})
export class BotaoInicialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  titulo: string;

}
