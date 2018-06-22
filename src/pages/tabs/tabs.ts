import { Component } from '@angular/core';

import { AlunosPage } from '../alunos/alunos';
import { HomePage } from '../home/home';
import { UsuariosPage } from '../usuarios/usuarios';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UsuariosPage;
  tab3Root = AlunosPage;

  constructor() {

  }
}
