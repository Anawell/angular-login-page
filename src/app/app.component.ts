import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import firebase from 'firebase/app'; 
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'AngularApp | Webkomplet';

  constructor(private titleSeo: Title,
              private metaSeo: Meta) { 
                const firebaseConfig = {
                  apiKey: "AIzaSyDA339nQuUPlx8QgbBOpcH0ygPr3UNMOxI",
                  authDomain: "angular-login-fd153.firebaseapp.com",
                  databaseURL: "https://angular-login-fd153.firebaseio.com",
                  projectId: "angular-login-fd153",
                  storageBucket: "angular-login-fd153.appspot.com",
                  messagingSenderId: "1036979778401",
                  appId: "1:1036979778401:web:dc3a1fa8c1f4b607eb8b20"
                };
                // Initialize Firebase
                firebase.initializeApp(firebaseConfig);
              }

  ngOnInit(): void {
    this.initSeoMeta();
  }

  initSeoMeta() {
    this.metaSeo.addTags([
      { name: 'robots', content: 'noindex, nofollow' }
    ])
    this.titleSeo.setTitle('AngularApp | Webkomplet');
  }
  
}