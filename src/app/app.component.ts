import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';
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
                const firebaseConfig = environment.firebaseConfig;
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