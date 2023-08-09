import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  //state (data)
  title = 'ang-intro';
  userChoice: string = '';

  constructor(public authService: AuthService) {
    setTimeout(() => {
      this.title = 'New-Ang-Intro'
    }, 5000);
  }
  onBtnLogoutClick() {
    this.authService.logout()
  }
}
