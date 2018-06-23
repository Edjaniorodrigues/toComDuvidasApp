import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Usuario_Interface } from '../../models/usuario/usuario-interface';

import { UsuarioCrudProvider } from '../../providers/usuario-crud/usuario-crud';
import { UsuariosPage } from '../usuarios/usuarios';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {

  usuariosObservable: Observable<{}>;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: UsuarioCrudProvider,
    private toast: ToastController
  ) {
    this.usuariosObservable = this.provider.getAll();
  }

  editUser(usuario: any){
    this.navCtrl.push(UsuariosPage,{usuario: usuario});
  }

  removeUser(key: string){
    this.provider.remove(key)
    .then(() => {
      this.toast.create({ message: 'Usuário removido com sucesso', duration: 3000 }).present();
    })
    .catch((e) => {
      this.toast.create({message: 'Erro ao remover Usuário', duration: 3000}).present();
    })
  }

}
