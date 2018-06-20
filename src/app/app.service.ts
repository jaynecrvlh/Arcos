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


  getProf(){
    
    return localStorage.getItem("_id")
  }

  setProf(userId){
    localStorage.setItem("_id", userId);
    console.log(userId);
  }

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
      this.setProf(r.userId);
      this.router.navigate(['pagina-inicial/secoes'])
      // this.username = r.nome;
      return r;
    });
  }

  // getNome(){
  //   return this.username;
  // }


  getUsuarios(){
    return this.http.get(this.urlp + "?token=" + this.getToken())
      .map((response:Response)=>(response.json()));
  }

  criarSecao(titulo, descricao, dicas, palpite, correta){
    console.log(titulo, descricao, dicas, palpite, correta)
    return this.http.post(this.urls  + "?token=" + this.getToken(), {
      titulo, 
      descricao, 
      dicas, 
      palpite, 
      correta      
    }).map((response: Response) =>(response.json()));
    
  }

  getSecoes(){
    console.log("chamou o get secoes")
    return this.http.get(this.urlp +"/" +this.getProf()+ "/sessoes" + "?token=" + this.getToken())
    .map((response:Response)=>(response.json()));
    // .map((response:Response) => {
    //   let data = response.json();
    //   console.log("data service: "+data);
    //   return data;
    // });
  }

  getSecao(id){
    return this.http.get(this.urls + "/sessoes/" + id + "?token=" + this.getToken())
    .map((response:Response)=>(response.json()));
  }

  getLogado(){
    return this.http.get(this.urlp + "/logado" + "?token=" + this.getToken())
      .map((response:Response)=>(response.json()));
  }

  logout(){
    localStorage.setItem("token", null);
    localStorage.setItem("_id", null);
  }

}

