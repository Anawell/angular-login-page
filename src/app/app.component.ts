import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environmentFirebase } from '../environments/env';
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
                const firebaseConfig = environmentFirebase.firebaseConfig;
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