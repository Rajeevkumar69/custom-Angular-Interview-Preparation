import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
     selector: 'app-debounce-time',
     standalone: false,
     templateUrl: './debounce-time.component.html',
     styleUrl: './debounce-time.component.scss'
})
export class DebounceTimeComponent implements OnInit {
     public apiUrl: string = `https://dummyjson.com/products/search?q=phone`;
     public searchControl: FormControl = new FormControl("");
     private http = inject(HttpClient);

     constructor() {
          this.search();
     }

     ngOnInit(): void {

     }

     public search() {
          this.searchControl.valueChanges
            .pipe(
              debounceTime(3000),
              //      filter((searchQuery:string)=>
              //           searchQuery.trim().length > 3
              //    ),
              //     distinctUntilChanged(),
              switchMap((search) => this.http.get(`${this.apiUrl}?q=${search}`))
            )
            .subscribe((res) => console.log(res));
     }

}
