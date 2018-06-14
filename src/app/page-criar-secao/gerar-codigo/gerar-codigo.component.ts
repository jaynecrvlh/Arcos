import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-gerar-codigo',
  templateUrl: './gerar-codigo.component.html',
  styleUrls: ['./gerar-codigo.component.css']
})
export class GerarCodigoComponent implements OnInit {
  titulo: string;
  descricao: string;
  palpite: Array<string> = [];
  opcao: number;
  dicas: Array<string> = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private servico : AppService) {
    this.activatedRoute.queryParams.subscribe(params => {
          this.titulo = params['titulo'];
          this.descricao =  params['descricao']; 
          this.palpite = params['palpite'];
          this.opcao =  params['opcao'];
          this.dicas = params['dicas'];
        });
  }

  ngOnInit() {
  }


  criarSecao6(){
    console.log("chegou na putaria do gerar");
    this.servico.criarSecao(this.titulo, this.descricao, this.dicas, this.palpite, this.opcao)
    .subscribe((data) => {
      console.log(data);
    },
      (error) => console.log(error))  
  }

}
