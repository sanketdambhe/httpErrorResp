import { Component,OnInit } from "@angular/core";


@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = "hospyNg";

  constructor() { 
  }

  ngOnInit() {    
  } 

  onCSSChange(color : string){

    $('#basestyle').attr('href','assets/css/style.'+ color+ '.css');  
    
    // if (color==='blue') this.cssUrl = 'assets/css/style.blue.css';
    // if (color==='green') this.cssUrl = 'assets/css/style.green.css';
    // if (color==='pink') this.cssUrl = 'assets/css/style.pink.css';
    // if (color==='red') this.cssUrl = 'assets/css/style.red.css';
    // if (color==='sea') this.cssUrl = 'assets/css/style.sea.css';
    // if (color==='violet') this.cssUrl = 'assets/css/style.violet.css';
  }
}
