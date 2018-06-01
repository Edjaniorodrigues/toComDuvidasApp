import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UsuarioCrudProvider {
  private PATH = 'contact/';

  constructor(private db: AngularFireDatabase) {
    
  }
  //Método para recuperar todos os Usuários do firestore
  getAll(){
    return this.db.list(this.PATH)
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        data: c.payload.val()
      }));
    })
  }

  //Método para recuperar um único usuário do Firestore
  get(key: string){
    return this.db.object(this.PATH + key)
    .snapshotChanges()
    .map(c =>{
      return {key: c.key, data: c.payload.val()};
    })

  }

  save(usuario: any){

  }

  remove(key: string){

  }

}
