import { Injectable,Service, NgZone } from '@angular/core';
import { environment } from './../../environments/environment.development';
import { Solicitud } from './../models/solicitud';
import { getDatabase, ref, push, set, update, remove, onValue, Database } from 'firebase/database';
import { getAuth, signInAnonymously, onAuthStateChanged, User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { initializeApp, getApps, getApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})

@Service()
export class Contacto {
  private app = getApp.length ? getApp() : initializeApp(environment.firebaseConfig);
  private auth = getAuth(this.app);
  private database: Database = getDatabase(this.app);

  constructor(private zone: NgZone) {}

  private async obtenerUsuario(): Promise<User> {
    if (this.auth.currentUser) {
      return this.auth.currentUser;
    }

    return new Promise<User>((resolve, reject) => {
      let cancelar: (() => void) | undefined;

      cancelar = onAuthStateChanged(
        this.auth,
        (usuario) => {
          if (usuario) {
            cancelar?.();
            resolve(usuario);
          }
        },
        (error) => {
          cancelar?.();
          reject(error);
        },
      );

      signInAnonymously(this.auth).catch((error) => {
        cancelar?.();
        reject(error);
      });
    });
  }
}
