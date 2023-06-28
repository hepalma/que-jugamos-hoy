import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private navCtrl: NavController, private databaseService: DatabaseService, private toastController: ToastController) { }

  username: string = "";
  password: string = "";

  async register() {
    if (this.username && this.password) { // Verificar si los campos no están vacíos
      this.databaseService.registerUser(this.username, this.password)
        .then(() => {
          console.log('Usuario registrado');
          this.presentToast('Usuario registrado exitosamente');
          this.navCtrl.navigateForward('/login');
        })
        .catch((error) => {
          console.error('Error al registrar usuario', error);
          this.presentToast('Error al registrar usuario');
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
