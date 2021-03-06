import { Component,OnInit } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = "hospyNg";
  color: string;

  constructor(public sanitizer: DomSanitizer) { 
  }

  ngOnInit() {    
    this.color = 'blue';
  } 

  onCSSChange(color : string){
    this.color = color; 

    jQuery('#basestyle').attr('href','assets/css/style.'+ color+ '.css');  
    
    // if (color==='blue') this.cssUrl = 'assets/css/style.blue.css';
    // if (color==='green') this.cssUrl = 'assets/css/style.green.css';
    // if (color==='pink') this.cssUrl = 'assets/css/style.pink.css';
    // if (color==='red') this.cssUrl = 'assets/css/style.red.css';
    // if (color==='sea') this.cssUrl = 'assets/css/style.sea.css';
    // if (color==='violet') this.cssUrl = 'assets/css/style.violet.css';
  }
}
