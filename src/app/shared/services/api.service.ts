import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, Subject } from 'rxjs';

@Injectable({
     providedIn: 'root'
})
export class ApiService {
     private apiUrl: string = 'https://dummyjson.com/users';
     public product: Subject<any> = new Subject<any>();
     $courseDuration = new BehaviorSubject<string>("2 Months");
     $userRole = new BehaviorSubject<string>('');
     private userDetails = new Map<number, Observable<any>>();

     private childFormDataSubject = new BehaviorSubject<any>({});
     childFormData$ = this.childFormDataSubject.asObservable();

     constructor(
          private _httpClient: HttpClient
     ) { }

     public getUserData() {
          return this._httpClient.get(this.apiUrl);
     }

     emitProduct(data: any) {
          this.product.next(data);
     }

     public getUserById(id: number) {
          if (!this.userDetails.has(id)) {
               const userDataObs = this._httpClient
                    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
                    .pipe(shareReplay(1));

               this.userDetails.set(id, userDataObs);
          }
          return this.userDetails.get(id);
     }

     public setChildFormData(data: any) {
          this.childFormDataSubject.next(data);
     }
}
