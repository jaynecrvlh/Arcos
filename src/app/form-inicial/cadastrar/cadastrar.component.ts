import { AppService } from './../../app.service';
import { User } from './../../modelos/user.model';
import { Component, OnInit, Output, EventEmitter, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'], 
  
})

export class CadastrarComponent implements OnInit {
  users: User[];
  nome: string;
  email: string;
  senha: string;
  cnfsenha: string;
  compatibilidade: boolean = false;

  constructor(private servico: AppService) { }

  ngOnInit() {

    this.servico.getUsuarios();

  }

  addUser(e){
    if(this.senha != this.cnfsenha){
      this.compatibilidade = true;
    }
    else{
      event.preventDefault();
      console.log('ta chamando');
      this.servico.cadastrar(this.nome, this.email, this.senha)
      // this.servico.cadastrar(new User(this.nome, this.email, this.senha))
        .subscribe((data) => {
          console.log(data);
        },
          (error) => console.log(error))

    // this.nome = "";
    // this.email = "";
    // this.senha = "";
    // this.cnfsenha = "";    
    }
  }
}
