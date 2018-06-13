import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { User } from './modelos/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AppService {
  urls = "http://localhost:3000/api/sessao";
  urlp = "http://localhost:3000/api/professores";
  username: string;

  constructor(private http: Http , private router: Router) { }

  // users: User[] = [];

  // mostrarPageApresentacao = new EventEmitter <boolean>();

  getToken(){
    return localStorage.getItem("token");
  }

  setToken(token){
    localStorage.setItem("token", token);
  }

  hasToken(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }

  cadastrar(nome, email, senha){
    console.log('entrou cadastrar');
    return this.http.post(this.urlp, {
      nome, email, senha
    }).map((response: Response) => (response.json()));
  }

  login(email, senha){
    console.log("entrou login");
    return this.http.post(this.urlp + "/login", {
      email,
      senha
    }).map((response:Response) => {
      let r = response.json();
      this.setToken(r.token);
      this.username = r.nome;
      return r;
    });
  }

  getNome(){
    return this.username;
  }

  // getUsuarios(){
  //   return this.http.get(this.urlp + "?token=" + this.getToken())
  //     .map((response:Response)=> {
  //       let user = response.json();
  //       let nome = user.nome;
  //       return
  //     });
  // }

  getUsuarios(){
    return this.http.get(this.urlp + "?token=" + this.getToken())
      .map((response:Response)=>(response.json()));
  }

}