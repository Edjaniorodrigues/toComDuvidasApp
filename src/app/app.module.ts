import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { HttpClientModule } from '@angular/common/http';
//import { HttpModule} from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioCrudProvider } from '../providers/usuario-crud/usuario-crud';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    UsuariosPage,
    TabsPage, 
    
    
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCfYKUDiy7JXHK8PG94zrpl1l6KQNt7nE0",
      authDomain: "tocomduvidasapp.firebaseapp.com",
      databaseURL: "https://tocomduvidasapp.firebaseio.com",
      projectId: "tocomduvidasapp",
      storageBucket: "tocomduvidasapp.appspot.com",
      messagingSenderId: "391259742703"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    UsuariosPage,
    TabsPage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioCrudProvider, AngularFireDatabase
  ]
})
export class AppModule {}
