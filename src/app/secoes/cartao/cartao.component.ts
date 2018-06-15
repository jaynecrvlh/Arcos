import { AppService } from './../../app.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Cartao } from '../../modelos/cartao.model';
import { SecoesComponent } from '../../secoes/secoes.component';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {
  @Input() secoes: any = [];

  @Input() index;

  constructor(private service: AppService) { }

  ngOnInit() {
    // this.secoes.push({titulo: "teste", descricao: "testando", data: "14/06/2018"});
    // console.log(this.secoes);
    console.log(this.secoes);
    console.log(this.secoes.length);
  }

}
