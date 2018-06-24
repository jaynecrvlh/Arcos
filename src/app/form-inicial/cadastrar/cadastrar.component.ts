import { FormInicialComponent } from './../form-inicial.component';
import { AppService } from './../../app.service';
import { User } from './../../modelos/user.model';
import { Component, OnInit, Output, EventEmitter, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';


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
  sucesso: boolean = false;

  constructor(private servico: AppService, private router: Router, private entrar: FormInicialComponent) { }

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
        .subscribe((data) => {
          console.log(data);
          this.sucesso = true;
          setTimeout(() => {
            this.router.navigate(['/pagina-apresentacao/entrar']);
            this.entrar.ativarEntrar();
          }
          , 4000);
        },
          (error) => console.log(error))  
    }
  }
}
