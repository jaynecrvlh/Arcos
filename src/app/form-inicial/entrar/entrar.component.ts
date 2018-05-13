import { Component, OnInit } from '@angular/core';

import { AppService } from './../../app.service';
import { User } from './../../modelos/user.model';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  emailLogin: string;
  senhaLogin: string;

  users: User [] = null
  
  constructor( private servico: AppService) { }

  ngOnInit() {
    this.servico.getUsuarios();
  }



  entrar(e) {
    event.preventDefault();
    console.log("Entrou no TS")
    this.servico.entrar(this.emailLogin, this.senhaLogin)
    .subscribe((data) => {
      this.users = data;
    },
      (error) => console.log(error));

  }
}
