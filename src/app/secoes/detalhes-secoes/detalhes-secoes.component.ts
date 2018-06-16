import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-detalhes-secoes',
  templateUrl: './detalhes-secoes.component.html',
  styleUrls: ['./detalhes-secoes.component.css']
})
export class DetalhesSecoesComponent implements OnInit {
  secao: any;

  constructor(private activatedRoute: ActivatedRoute, private service: AppService) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.secao = params['secao'];
      });
  }

  ngOnInit() {
  //   this.service.getSecao(this.id)
  //   .subscribe(
  //     data=>{
  //       console.log(data);
  //       this.secao = data;
  //       console.log(this.secao);
  //     },
  //     error=>{
  //       console.log(error);
  //     }
  //   )
  }
}
