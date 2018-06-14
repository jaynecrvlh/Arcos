import { Component, OnInit, Output } from '@angular/core';
import { Cartao } from '../../modelos/cartao.model';
import { GerarCodigoComponent } from '../gerar-codigo/gerar-codigo.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-dicas',
  templateUrl: './add-dicas.component.html',
  styleUrls: ['./add-dicas.component.css']
})
export class AddDicasComponent implements OnInit {
  dicas: Array<string> = [];
  casa1: string;
  casa2: string;
  casa4: string;
  casa5: string;
  casa7: string;
  casa8: string;
  casa10: string;
  casa11: string;
  casa13: string;
  casa14: string;
  titulo: string;
  descricao: string;
  palpite: Array<string> = [];
  opcao: string;
  
  texto: string = "Utilize o conteúdo da aula como base nas dicas que cadastrar";


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
        this.titulo = params['titulo'];
        this.descricao =  params['descricao']; 
        this.palpite = params['palpite'];
        this.opcao =  params['opcao'];
        });
  }

  ngOnInit() {
  }

    clicou(texto: string){
    this.texto = texto;
    console.log(texto);
  }

  criarSecao3(e){
    event.preventDefault();

    this.dicas.push(this.casa1);
    this.dicas.push(this.casa2);
    this.dicas.push(this.casa4);
    this.dicas.push(this.casa5);
    this.dicas.push(this.casa7);
    this.dicas.push(this.casa8);
    this.dicas.push(this.casa10);
    this.dicas.push(this.casa11);
    this.dicas.push(this.casa13);
    this.dicas.push(this.casa14);
    this.router.navigate(['/pagina-inicial','criarsecao','gerarcodigo'], { queryParams: { titulo:this.titulo, descricao: this.descricao, palpite: this.palpite, opcao: this.opcao, dicas: this.dicas}});
  
  }
}
