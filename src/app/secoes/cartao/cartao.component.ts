import { Component, OnInit, Input } from '@angular/core';

import { Cartao } from '../../modelos/cartao.model';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {
  @Input() cartoes: Cartao[];
  // @Input() cartoes = [
  //   new Cartao('Raquel de Queiroz', '05 de maio de 2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
  //   new Cartao('Pedra do Chalé', '07 de maio de 2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit'),
  //   new Cartao('Galinha Choca', '28 de abril de 2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
  //   new Cartao('Açude do Cedro', '17 de abril de 2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l.'),
  //   new Cartao('Cego Aderaldo', '25 de abril de 2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
  // ]
  @Input() index;

  constructor() { }

  ngOnInit() {
  }

}
