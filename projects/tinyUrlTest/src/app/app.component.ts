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
    this.tinyUrl.shorten('https://www.google.com').subscribe(res => {
      this.shortenedUrl = res;
      console.log(res); // https://tinyurl.com/8wa5w2o;
    });
  }
}
