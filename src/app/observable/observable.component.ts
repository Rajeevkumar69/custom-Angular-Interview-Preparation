import { Component, OnInit, signal } from '@angular/core';

@Component({
     selector: 'app-observable',
     standalone: false,
     templateUrl: './observable.component.html',
     styleUrl: './observable.component.scss',
})
export class ObservableComponent implements OnInit {
     public codeSnippet = signal(`
     constructor(private http: HttpClient) {}

     public getUsers(): Observable<any> {
          return this.http.get<any>(this.apiUrl).pipe(
          map(users => users.filter(user => user.id > 1))
          );
     }`);

     constructor() { }

     ngOnInit(): void {

     }

}
