import { Component } from '@angular/core';
//import { HttpModule } from '@angular/http';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsuarioCrudProvider } from '../../providers/usuario-crud/usuario-crud';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario_Interface } from '../../models/usuario/usuario-interface';
import { HomePage } from '../../pages/home/home';


@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {
  title: string;
  form: FormGroup;
  usuario: Usuario_Interface;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private provider: UsuarioCrudProvider,
    private toast: ToastController
  ) {

    this.usuario = this.navParams.data.usuario || {};
    this.createForm();
  
    this.setupPageTitle();
  }

  private setupPageTitle(){
    this.title = this.navParams.data.usuario ? 'Alteração de Usuário' : 'Novo Usuário';  
  }

  createForm(){
    this.form = this.formBuilder.group({
      key: [this.usuario.key],
      nome: [this.usuario.nome, Validators.required],
      email: [this.usuario.email, Validators.required],
      senha: [this.usuario.senha, Validators.required],
    });
  }
 onSubmit(){
   if (this.form.valid){
     this.provider.save(this.form.value)
     .then(()=>{
      this.toast.create({ message: 'Usuário Cadastrado com Sucesso!', duration: 3000}).present();
      console.log(this.form.value);
      this.navCtrl.setRoot(HomePage);
    })
     .catch((e)=>{
       this.toast.create({ message: "Erro ao Cadastrar Usuário!", duration: 3000}).present();
       console.error(e);
     });
     ;
   }
 }
}
