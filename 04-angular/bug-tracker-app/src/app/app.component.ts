import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bug-tracker-app';

  constructor(){
    const obs$ = new Observable((subscriber => {
      let count = 0;
      setInterval(() => {
        ++count
        subscriber.next(count)
      }, 1000)
    }))

    const subscriber = obs$.subscribe(val => console.log(val))

    setTimeout(() => {
      subscriber.unsubscribe()
    }, 20000);
  }
}
