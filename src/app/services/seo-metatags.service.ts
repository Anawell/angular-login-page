import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoMetatagsService {

  constructor(private title: Title,
              private meta: Meta) { }

  setSeoMeta(title, metadescription) {
    this.meta.addTags([
      { name: 'description', content: metadescription }
    ])
    this.title.setTitle(title);
  }
}
