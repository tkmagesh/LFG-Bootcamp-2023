import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Bug {
  id : number,
  name : string,
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




  constructor(private httpClient : HttpClient){

  }

  onBtnGetBugsClick() {
    const bugs$ = this.httpClient
      .get<Bug[]>('http://localhost:3000/bugs')  
    bugs$.subscribe(bugs => console.table(bugs))
  }
  
  onBtnCreateNewClick() {
    const newBugData : NewBug  = {
      name : 'Dummy Data - ' + Math.round(Math.random() * 100),
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
      name: 'Updated Bug - ' + Math.round(Math.random() * 100),
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
