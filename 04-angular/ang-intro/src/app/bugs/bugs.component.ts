import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

interface Bug {
  id : number,
  title : string,
  isClosed : boolean,
  createdAt : Date
}

type NewBug = Omit<Bug, "id">

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent {




  constructor(private httpClient : HttpClient, private authService : AuthService/* to access the accessToken to be sent with the http request */){

  }

  onBtnGetBugsClick() {
    // No need to add the header in each and every request as the interceptor (HttpAuthorizeInterceptor) will take care of it.
    /*
    // get the access token from the service
    const accessToken = this.authService.AccessToken

    // create the header object to be passed with the http request
    const headers = new HttpHeaders({
      "authorization" : `Bearer ${accessToken}`
    }); 
    const bugs$ = this.httpClient
      .get<Bug[]>('http://localhost:3000/bugs', { headers : headers }) // passing the headers with the request
    bugs$.subscribe(bugs => console.table(bugs))
    */

    this.httpClient
      .get<Bug[]>('http://localhost:3000/bugs')
      .subscribe(bugs => console.table(bugs))
  }
  
  onBtnCreateNewClick() {
   
    const newBugData : NewBug  = {
      title : 'Dummy Data - ' + Math.round(Math.random() * 100),
      createdAt : new Date(),
      isClosed : false
    }
    this.httpClient
      .post<Bug>('http://localhost:3000/bugs', newBugData)
      .subscribe(newBug => console.log(newBug))
  }

  onBtnUpdateBugClick() {
    const bugToUpdate : Bug = {
      id : 6,
      title: 'Updated Bug - ' + Math.round(Math.random() * 100),
      isClosed : false,
      createdAt : new Date()
    }
    this.httpClient
      .put<Bug>(`http://localhost:3000/bugs/${bugToUpdate.id}`, bugToUpdate)
      .subscribe(updatedBug => console.log('bug updated in the server - ', updatedBug))
  }

  onBtnDeleteBugClick() {
    this.httpClient
      .delete('http://localhost:3000/bugs/8')
      .subscribe({
        next : () => console.log('bug 8 removed from the server'),
        error : (err) => console.log('error : ', err)
      })
  }

}
