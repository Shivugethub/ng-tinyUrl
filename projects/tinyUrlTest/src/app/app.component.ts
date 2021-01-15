import { Component } from '@angular/core';
import {NgTinyUrlService} from 'ng-tiny-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tinyUrlTest';
  shortenedUrl = '';

  constructor(private tinyUrl: NgTinyUrlService) {
    this.tinyUrl.shorten('www.google.com').subscribe(res => {
      this.shortenedUrl = res;
    });
  }
}
