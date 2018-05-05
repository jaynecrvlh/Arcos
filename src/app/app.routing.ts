import { Routes, RouterModule } from "@angular/router";
import { CriarSecaoComponent } from './criar-secao/criar-secao.component';
import { SecoesComponent } from './secoes/secoes.component';

const APP_ROUTES: Routes = [
    {path: 'secoes', component: SecoesComponent},
    {path: 'criarsecao', component: CriarSecaoComponent}
]

export const routing =  RouterModule.forRoot(APP_ROUTES);