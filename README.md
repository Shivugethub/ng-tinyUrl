# NgTinyUrl

I created this plugin using [TinyUrl](https://tinyurl.com/) api to use in angular 6+

## Installation

To install this library, run:

```bash
$ npm install ng-tinyUrl
```

## Usage

```typescript

import { ShorturlModule } from './modules/shorturl/shorturl.module';
import {NgTinyUrlModule} from 'ng-tiny-url';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTinyUrlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once imported in your module, inject the NgTinyUrlService into your component as shown below: 

```typescript
import {NgTinyUrlService} from 'ng-tiny-url';


export class AppComponent {
  title = 'tinyUrlTest';
  shortenedUrl = '';

  constructor(private tinyUrl: NgTinyUrlService) {
    this.tinyUrl.shorten('www.google.com').subscribe(res => {
      this.shortenedUrl = res;
    });
  }
}
```

## License

MIT © [Kelvin Esekhile](mailto:kelvinoesekhile@gmail.com)
