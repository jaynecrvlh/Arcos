import { Routes, RouterModule } from "@angular/router";
import { CriarSecaoComponent } from './criar-secao/criar-secao.component';
import { SecoesComponent } from './secoes/secoes.component';
import { GerarCodigoComponent } from './gerar-codigo/gerar-codigo.component';

const APP_ROUTES: Routes = [
    {path: 'secoes', component: SecoesComponent},
    {path: 'criarsecao', component: CriarSecaoComponent},
    {path: 'criarsecao/gerarcodigo', component: GerarCodigoComponent}

]

export const routing =  RouterModule.forRoot(APP_ROUTES);