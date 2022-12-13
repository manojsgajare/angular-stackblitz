import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  title: String = "products";

  products:  [
    {
      id:0,
      name : "food",
      quantity : 25
    }
  ]
}
