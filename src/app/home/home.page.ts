import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user2: string="";
  contrasena2: string ="";
  constructor(private activerouter: ActivatedRoute, public router: Router) {
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.user2 = this.router.getCurrentNavigation()?.extras?.state?.['correito'];
        this.contrasena2 = this.router.getCurrentNavigation()?.extras?.state?.['password'];
      }
    })
  }

}
