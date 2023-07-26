import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //state (data)
  title = 'ang-intro';
  userChoice : string = '';
  
  constructor(){
    setTimeout(() => {
      this.title = 'New-Ang-Intro'
    }, 5000);
  }
}
