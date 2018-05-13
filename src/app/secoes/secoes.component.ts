import { Component, OnInit, Input } from '@angular/core';
import { Cartao } from '.././modelos/cartao.model';

@Component({
  selector: 'app-secoes',
  templateUrl: './secoes.component.html',
  styleUrls: ['./secoes.component.css']
})
export class SecoesComponent implements OnInit {
  // cartoes: Cartao[];
  @Input() cartoes = [
    new Cartao('Raquel de Queiroz', '05 de maio de 2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
    new Cartao('Pedra do Chalé', '07 de maio de 2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
    new Cartao('Galinha Choca', '28 de abril de 2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
    new Cartao('Açude do Cedro', '17 de abril de 2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
    new Cartao('Cego Aderaldo', '25 de abril de 2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
  ]
  @Input() index;
  @Input() avancar = "Avançar"

  constructor() { }

  ngOnInit() {
  }

}
