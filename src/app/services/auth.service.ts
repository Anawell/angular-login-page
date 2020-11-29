import { Injectable } from '@angular/core';

// Firebase
import firebase from 'firebase/app'; 
import 'firebase/auth';


// REST api
/*import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators'; 
  import { apiUrl } from '../../environments/env';
*/


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  // REST api method
  /* 
  public token: string;
  public headers: HttpHeaders;
  public readonly apiUrl = apiUrl; */

  constructor(/* public http: HttpClient */) {
      // REST api methode: if a token is already saved
      /* const currentUser = JSON.parse(localStorage.getItem('user'));
      this.token = currentUser && currentUser.token; */
   }

  // Firebase methode
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => { resolve() },
          (error) => { reject(error) }
        )
      }
    )
  }

  // REST api method
  /* signInUser(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl+'/auth/login', { username: email, password: password })
      .pipe(
        map((response: Response) => {
            this.token = response['token']; 
            const expiresIn = response['expires_in'];
            if (this.token) {
                localStorage.setItem('user', JSON.stringify({ expires_in: expiresIn, token: this.token })); // Keep user logged
            }
            return response;
        })
      );
  } */

}

