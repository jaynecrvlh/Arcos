import { Component, OnInit, Input } from '@angular/core';

import { AppService } from './../../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  usuario: string;

  constructor(private servico: AppService) {
    // this.usuario = this.servico.getNome();
   }

  // userNome(){
  //   this.servico.getUsuarios();
  // }
  ngOnInit() {
    this.servico.getLogado()
    .subscribe(
      data=>{
        this.user = data;
        console.log(this.user);
      },
      error=>{
        console.log(error);
      }
    )
  }

  logout(){
    this.servico.logout();
  }

}
