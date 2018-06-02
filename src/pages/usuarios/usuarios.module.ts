import { NgModule } from '@angular/core';
//import { Http, HttpModule} from '@angular/http';
import { IonicPageModule } from 'ionic-angular';
import { UsuariosPage } from './usuarios';
//import { UsuarioCrudProvider } from '../../providers/usuario-crud/usuario-crud';

@NgModule({
  declarations: [
    UsuariosPage,
    
  ],
  imports: [
    IonicPageModule.forChild(UsuariosPage),
    //UsuarioCrudProvider, 
  ],
})
export class UsuariosPageModule {}
