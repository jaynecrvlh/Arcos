import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { User } from './modelos/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AppService {
  static url = "http://rest.learncode.academy/api/projeto3/user";

  constructor(private http: Http , private router: Router) { }

  users: User[] = [];

  mostrarPageApresentacao = new EventEmitter <boolean>();

  
  getUsuarios(){
    return this.http.get(AppService.url)
    .map((response:Response) => {
      this.users = [];
      for(let user of response.json()){
        this.users.push(new User(user.nome, user.email, user.senha))
      }
      console.log("get usuarios")
      console.log(this.users);
      return this.users;
    }) .catch((error:Response) => Observable.throw(error));
  }


  // verificar email cadastrado
  // addUser(newUser: User){
  //   console.log("chamou servico")
  //   return this.http.get(AppService.url)
  //   .map((response: Response) => {
  //     this.users = [];
  //     console.log(this.users);
  //     for(let user of response.json()){
  //       if(newUser.email == user.email){
  //         console.log("usuario já cadastrado");
  //         return
  //       }
  //     }console.log("saiu do for") 
  //     console.log(newUser)
  //     return this.http.post(AppService.url, newUser)
  //     .map((response: Response) => response.json())
  //     .catch((error: Response) => Observable.throw(error));
  //   }
  // )}

  // addUser(newUser: User){
  //   return this.http.post(AppService.url, newUser)
  //         .map((response: Response) => response.json())
  //         .catch((error: Response) => Observable.throw(error));

  // }

  // addUser(newUser: User){
  //   return this.http.get(AppService.url)
  //   .map((respose:Response) =>{
  //     this.users = [];
  //     for( let user of respose.json()){
  //       if (newUser.email == user.email){
  //         console.log("usuário cadastrado")
  //       }
  //     }
  //   })
    
  // }

  addUser(newUser: User){  
    this.getUsuarios()
    console.log(this.users)
    for ( let user1 of this.users){
      if(newUser.email == user1.email){
        console.log("usuario já cadastrado");
        return
      } 
    } 
    return this.http.post(AppService.url, newUser)
            .map((response: Response) => {response.json()
              alert ("Cadastro realizado com sucesso, faça login na plataforma com o email e a senha cadastrados");
            })
            .catch((error: Response) => Observable.throw(error));
    
    
  }

  entrar(emailLogin, senhaLogin){
    console.log("chamou serviço")
    return this.http.get(AppService.url)    
    .map((response:Response) => {
        this.users = [];
        for(let user of response.json()){
          if (emailLogin != user.email && senhaLogin != user.senha){
            console.log("Email não cadastrado");
            alert ("Email não cadastrado");
            return
          }
          else if( emailLogin == user.email && senhaLogin != user.senha){
            console.log("senha confere");
            alert ("Senha incorreta");
            return
          }
          else{
            console.log("Ta tudo ok, vai em frente")
            // alert ("Ta tudo ok, vai em frente")

            this.router.navigate(['pagina-inicial/secoes'])
            return
            
          }
           
        }
        console.log(this.users)
        if (this.users.length == 0){
          console.log("Email não cadastrado");
          alert ("Email não cadastrado");
          return
        }
        return this.users;
    }).catch((error:Response) => Observable.throw(error));
  } 
 
}