import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable} from 'rxjs';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController } from '@ionic/angular';
import { Juegos } from './juegos';
import { Platform } from '@ionic/angular'; 

@Injectable({
  providedIn: 'root'
})
export class DbService {
  //variable manipular base de datos
  public database!: SQLiteObject;
  //variables instrucciones sql- creacion tablas
  tablaJuegos: string = "CREATE TABLE IF NOT EXISTS juegos(id_juegos INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(50) NOT NULL, consola VARCHAR(20) NOT NULL, desarrollador VARCHAR(30) NOT NULL);";

  //variable registros iniciales
  registroJuegos: string = "INSERT or IGNORE INTO juegos(id_juegos,nombre,consola,desarrollador) VALUES(1,'The Legend Of Zelda tears of the kingdom','Nintendo Switch','Nintendo');";
  
  //Observables para manipular datos de la tabla
  listaJuegos = new BehaviorSubject([]);

  //observable usuario
  

  //Observable manipular si la bd está lista o no
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private alertController: AlertController, private toastController: ToastController, private sqlite: SQLite, private platform: Platform) { 
    this.crearBD();
  } 


  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      icon: 'globe',
    });

    await toast.present();
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  //metodo para retornar el estatus de la BD
  dbState(){
    return this.isDBReady.asObservable();
  }
  //devolver el observable de los registro de cada tabla
  fetchJuegos(): Observable<Juegos[]> {
    return this.listaJuegos.asObservable();
  }

  crearBD() {
    //verificamos que la plataforma este lista
    this.platform.ready().then(() => {
      //creamos la BD
      this.sqlite.create({
        name: 'bdjuegos.db',
        location: 'default'
      })?.then((db: SQLiteObject) => {
        //guardamos la conexion a la BD en la variable propia
        this.database = db;
        //llamar a la funcion para crear las tablas
        this.crearTablas();
      }).catch(e => {
        //muestro el mensaje de error en caso de ocurrir alguno
        this.presentToast("Error BD:" + e);
      })
    })
  }

  async crearTablas(){
    try{
      //creacion de tablas
      await this.database.executeSql(this.tablaJuegos, []);

      
      //insertar los datos en las tablas
      await this.database.executeSql(this.registroJuegos, []);

      //cargar esos registros en el observable
      this.buscarJuegos();
      this.isDBReady.next(true);


    }catch(e){
      this.presentToast("Error en la creacion de las tablas: " + e);
    }
    
  }

  buscarJuegos() {
    //retorno la ejecución del select
    return this.database.executeSql('SELECT * FROM juegos', []).then(res => {
      //creo mi lista de objetos de noticias vacio
      let items: Juegos[] = [];
      //si cuento más de 0 filas en el resultado entonces agrego los registros al items
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id_juegos,
            nombre: res.rows.item(i).nombre,
            consola: res.rows.item(i).consola,
            desarrollador: res.rows.item(i).desarrollador
          })
          
        }
      }
      //actualizamos el observable de las noticias
      this.listaJuegos.next(items as any);
    })
  }

  insertarJuegos(nombre: any, consola: any, desarrollador: any) {
    let data = [nombre,consola,desarrollador];
    return this.database.executeSql('INSERT INTO juegos (nombre,consola,desarrollador) VALUES (?,?,?)', data).then(res=>{
      this.buscarJuegos();
    });
  }

  modificarJuegos(id: any, nombre: any, consola: any, desarrollador: any) {
    let data = [nombre,consola,desarrollador,id];
    return this.database.executeSql('UPDATE juegos SET nombre = ?, consola = ?, desarrollador = ? WHERE id_juego = ?', data).then
    (data2=>{
      this.buscarJuegos();
    });
  }

  eliminarJuegos(id: any) {
    return this.database.executeSql('DELETE FROM juegos WHERE id_juego = ?', [id]).then(a=>{
      this.buscarJuegos();
    });
  }

}

