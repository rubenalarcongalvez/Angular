import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//With this, we can import it in our HTMLs and use it
export class ThemeService {

  //first, get the document and inject
  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: string) {
    //we get the element which will change the theme
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    //we change its direction
    if (themeLink) {
      themeLink.href = theme + ".css"
    }
  }
}
