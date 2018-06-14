import { Component, OnInit, Input } from '@angular/core';

import { Cartao } from '../../modelos/cartao.model';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {
  @Input() cartoes: Cartao[];

  @Input() index;

  constructor() { }

  ngOnInit() {
  }

}
