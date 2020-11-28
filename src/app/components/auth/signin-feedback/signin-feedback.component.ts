import { Component, OnInit } from '@angular/core';
import { SeoMetatagsService } from 'src/app/services/seo-metatags.service';

@Component({
  selector: 'app-signin-feedback',
  templateUrl: './signin-feedback.component.html',
  styleUrls: ['./signin-feedback.component.scss']
})
export class SigninFeedbackComponent implements OnInit {

  constructor(private seoMetatagsService: SeoMetatagsService) { }

  ngOnInit(): void {
    this.initSeoMeta();
  }

  initSeoMeta() {
    this.seoMetatagsService.setSeoMeta('Hurá | Webkomplet', 'Zadal(a) jste platný e‑mail a heslo!')
  } 

}
