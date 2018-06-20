import { Component, OnInit } from '@angular/core';

import { AppService } from './../../app.service';
import { User } from './../../modelos/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  emailLogin: string;
  senhaLogin: string;
  erro: boolean = false;
  
  constructor( private servico: AppService, private router: Router) { }

  ngOnInit() {
    this.servico.getUsuarios();
  }



  entrar(e) {
    event.preventDefault();
    console.log("Entrou no TS")
    this.servico.login(this.emailLogin, this.senhaLogin)
    .subscribe((data) => {
      console.log(data);
    },
      (error) => this.erro = true);
      // console.log(error)
  }
}
