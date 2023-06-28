import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LoggedIn: boolean = false;

  get isLoggedIn(): boolean {
    return this.LoggedIn;
  }

  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) {}

  registerUser(username: string, password: string): Promise<any> {
    return this.databaseService.registerUser(username, password);
  }

  loginUser(username: string, password: string): Promise<boolean> {
    return this.databaseService.loginUser(username, password)
      .then((data) => {
        this.LoggedIn = data.rows.length > 0;
        return this.isLoggedIn;
      })
      .catch((error) => {
        console.error('Error logging in', error);
        return false;
      });
  }

  logout(): void {
    // Aquí realizas las tareas para finalizar la sesión del usuario
    // Por ejemplo, podrías eliminar cualquier información de sesión almacenada
    // y restablecer el estado de la variable isLoggedIn a false
    this.LoggedIn = false;
    this.router.navigate(['/login']);
  }
}