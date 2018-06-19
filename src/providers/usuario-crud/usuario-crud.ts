//import { HttpClientModule } from '@angular/common/http';
//import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map'

@Injectable()
export class UsuarioCrudProvider {
  private PATH = 'usuarios/';

  constructor(private db: AngularFireDatabase) {
    
  }
  //Método para recuperar todos os Usuários do firestore
  getAll(){
    return this.db.list(this.PATH)
    .snapshotChanges()
    .map(changes => {
      return changes.map(user => ({key: user.payload.key, ...user.payload.val()}));
    })
  }

  //Método para recuperar um único usuário do Firestore
  get(key: string){
    return this.db.object(this.PATH + key)
    .snapshotChanges()
    .map(user =>{
      //return {key: c.key, data: c.payload.val()};
      return {key: user.key, ...user.payload.val() };
    })

  }

  save(usuario: any){
    return new Promise((resolve, reject) =>{
      if (usuario.key ){
        this.db.list(this.PATH)
        //.update(usuario.key, {name: usuario.nome, e_mail: usuario.email, password: usuario.senha, type: usuario.perfil})
        .update(usuario.key, { nome: usuario.nome, email: usuario.email, senha: usuario.senha, perfil: usuario.perfil})
        .then(() => resolve())
        .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
        //.push({ name: usuario.nome, e_mail: usuario.email, password: usuario.senha, type: usuario.perfil})
        .push({ nome: usuario.nome, email: usuario.email, senha: usuario.senha, perfil: usuario.perfil})
        .then(()=> resolve());
      }
    });

  }

  remove(key: string){
    return this.db.list(this.PATH).remove(key);

  }

}
