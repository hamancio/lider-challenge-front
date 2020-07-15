import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  users: any[];
  filteredUsers: any[];
  filterBy;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => {
        this.users = users;
        this.filteredUsers = [...this.users];
      })
  }

  filter() {
    this.filteredUsers = [...this.users.filter(user => user.name.includes(this.filterBy))];
  }
}
