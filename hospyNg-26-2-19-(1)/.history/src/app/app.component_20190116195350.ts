import { Component,OnInit } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = "hospyNg";
  cssUrl: string;

  constructor(public sanitizer: DomSanitizer) { 
  }

  ngOnInit() {    
    this.cssUrl = '/assets/css/style.blue.css';
  } 

  onCSSChange(){
    this.cssUrl = '/assets/css/style.blue.css';
    this.cssUrl = '/assets/css/style.green.css';
    this.cssUrl = '/assets/css/style.pink.css';
    this.cssUrl = '/assets/css/style.red.css';
    this.cssUrl = '/assets/css/style.sea.css';
    this.cssUrl = '/assets/css/style.violet.css';
  }
}
