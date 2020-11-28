import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'AngularApp | Webkomplet';

  constructor(private titleSeo: Title,
              private metaSeo: Meta) { }

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