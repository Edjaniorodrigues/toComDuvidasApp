import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UsuarioCrudProvider {
  private PATH = 'contact/';

  constructor(private db: AngularFireDatabase) {
    
  }

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

  get(key: string){

  }

  save(usuario: any){

  }

  remove(key: string){

  }

}
