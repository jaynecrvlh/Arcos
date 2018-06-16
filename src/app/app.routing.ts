import { CriarSecaoComponent } from './page-criar-secao/criar-secao/criar-secao.component';
import { GerarCodigoComponent } from './page-criar-secao/gerar-codigo/gerar-codigo.component';
import { PageCriarSecaoComponent } from './page-criar-secao/page-criar-secao.component';
import { AddDicasComponent } from './page-criar-secao/add-dicas/add-dicas.component';
import { Routes, RouterModule, ChildActivationEnd } from "@angular/router";

import { CadastrarComponent } from './form-inicial/cadastrar/cadastrar.component';
import { EntrarComponent } from './form-inicial/entrar/entrar.component';
import { PageApresentacaoComponent } from './page-apresentacao/page-apresentacao.component';
import { PageInicialComponent } from './page-inicial/page-inicial.component';

import { SecoesComponent } from './secoes/secoes.component';
import { DetalhesSecoesComponent } from './secoes/detalhes-secoes/detalhes-secoes.component';


const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/pagina-apresentacao/entrar', pathMatch: 'full'},
    {path: 'pagina-apresentacao', component: PageApresentacaoComponent, children : [
        {path: 'entrar', component: EntrarComponent},
        {path: 'cadastrar', component: CadastrarComponent}
    ]},
    {path: 'pagina-inicial', component: PageInicialComponent, children:[
        {path: 'secoes', component: SecoesComponent, children:[
            {path: 'detalhe', component: DetalhesSecoesComponent}
        ]},
        {path: 'criarsecao', component: PageCriarSecaoComponent, children: [
            {path: 'gerarcodigo', component: GerarCodigoComponent},
            {path: 'addDicas', component: AddDicasComponent},
            {path: 'addPergunta', component: CriarSecaoComponent} 
        ]}
    ]},
   
   
]

export const routing =  RouterModule.forRoot(APP_ROUTES);