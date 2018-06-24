import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { NavbarComponent } from './../../page-inicial/navbar/navbar.component';

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
  codigo: number;
  sucesso: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private servico : AppService, private navbar: NavbarComponent) {
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
    this.servico.criarSecao(this.titulo, this.descricao, this.dicas, this.palpite, this.opcao)
    .subscribe((data) => {
      console.log(data);
      this.sucesso = true;
      this.setCodigo(data);
      setTimeout(() => {
        this.router.navigate(['/pagina-inicial', 'secoes']);
        this.navbar.ativarSecao();
      }
      , 4000);
    },
      (error) => console.log(error))  
  }

  setCodigo(data){
    this.codigo = data.codigo;
  }

}


