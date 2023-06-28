import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
  username: string = "";
  password: string = "";

  item: any={
    imagen: "assets/icon/favicon.png"
  }

 
  
  constructor(private navCtrl: NavController, private databaseService: DatabaseService, private toastController: ToastController, private authService: AuthService) {}

  async login() {
    if (this.username && this.password) { // Verificar si los campos no están vacíos
      this.databaseService.loginUser(this.username, this.password)
        .then((data) => {
          if (data.rows.length > 0) {
            console.log('Inicio de sesión exitoso');
            this.presentToast('Inicio de sesión exitoso');
            // Redirigir a la página "HomePage" o a la página deseada después de iniciar sesión
            this.navCtrl.navigateRoot('/home');
          } else {
            console.log('Credenciales inválidas');
            this.presentToast('Credenciales inválidas');
          }
        })
        .catch((error) => {
          console.error('Error al iniciar sesión', error);
          this.presentToast('Error al iniciar sesión');
        });
    } else {
      console.log('Los campos de usuario y contraseña son obligatorios');
      this.presentToast('Los campos de usuario y contraseña son obligatorios');
    }
  }
  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
  
    toast.present();
  }


  ngOnInit() {
  }

}