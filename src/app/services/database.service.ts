import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

import { Platform } from '@ionic/angular';

@Injectable()
export class DatabaseService {
  private database!: SQLiteObject;

  registrouser: string = "INSERT or IGNORE INTO users(hector,12345);";

  constructor(private platform: Platform, private sqlite: SQLite) {
    this.platform.ready().then(() => {
      this.sqlite
        .create({
          name: 'myDB.db',
          location: 'default',
        })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.createTables();
        })
        .catch((error) => {
          console.error('Error opening database', error);
        });
    });
  }

  private createTables(): void {
    const createTableQuery =
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)';
    this.database
      .executeSql(createTableQuery, [])
      .then(() => {
        console.log('Tables created');
        this.database.executeSql(this.registrouser, []);
      })
      
      .catch((error) => {
        console.error('Error creating tables', error);
      });
  }

  public registerUser(username: string, password: string): Promise<any> {
    const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
    return this.database.executeSql(insertUserQuery, [username, password]);
  }

  public loginUser(username: string, password: string): Promise<any> {
    const selectUserQuery = 'SELECT * FROM users WHERE username = ? AND password = ?';
    return this.database.executeSql(selectUserQuery, [username, password]);
  }
}