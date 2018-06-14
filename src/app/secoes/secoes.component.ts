import { AppService } from './../app.service';
import { Component, OnInit, Input } from '@angular/core';
import { Cartao } from '.././modelos/cartao.model';

@Component({
  selector: 'app-secoes',
  templateUrl: './secoes.component.html',
  styleUrls: ['./secoes.component.css']
})
export class SecoesComponent implements OnInit {

  constructor(private service: AppService) { }

  secoes: any = [];
  ngOnInit() {
  //   this.data = this.service.getSecoes()

  //   this.secoes.push(new Cartao(this.data.titulo, this.data.data, this.data.decricao, this.data.palpite, this.data.correta, this.data.dicas, this.data.codigo))
  //   console.log(this.secoes);
  //   console.log("data: " +this.data)
  // }
  this.service.getSecoes()
          .subscribe(
            data=>{
              this.secoes = data;
              console.log(this.secoes);
            },
            error=>{
              console.log(error);
            }
          )}

}
