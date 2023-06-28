import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-listado-disponible',
  templateUrl: './listado-disponible.page.html',
  styleUrls: ['./listado-disponible.page.scss'],
})
export class ListadoDisponiblePage implements OnInit {

  arregloJuegos: any = [
    {
      id:'',
      nombre:'',
      consola:'',
      desarrollador: ''
    }
  ]

  constructor( public router: Router, private servicioBD: DbService) { }

  ngOnInit() {
    this.servicioBD.dbState().subscribe(res =>{
      if(res) {
        this.servicioBD.fetchJuegos().subscribe(item => {
          this.arregloJuegos = item;
        })
      }
    })
  }
}