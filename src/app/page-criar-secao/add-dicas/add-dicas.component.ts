import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dicas',
  templateUrl: './add-dicas.component.html',
  styleUrls: ['./add-dicas.component.css']
})
export class AddDicasComponent implements OnInit {

  
  texto: string;

  constructor() { }

  ngOnInit() {
  }

    clicou(texto: string){
    this.texto = texto;
    console.log(texto);
  }

}
