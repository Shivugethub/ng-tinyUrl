# NgTinyUrl

An angular library to shorten url using [TinyUrl](https://tinyurl.com/) api. Works on angular version 6+

## Installation

To install this library, run:

```bash
$ npm install ng-tiny-url
```

## Usage

```typescript

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
        console.log(res); // https://tinyurl.com/8wa5w2o;
      });
    }
}
```

## License

MIT © [Kelvin Esekhile](mailto:kelvinoesekhile@gmail.com)
