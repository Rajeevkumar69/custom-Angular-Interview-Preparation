import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { User } from '../../../shared/interfaces/common.interface';
import { FormControl } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs';

@Component({
     selector: 'app-component-2',
     standalone: false,
     templateUrl: './component-2.component.html',
     styleUrl: './component-2.component.scss'
})
export class Component2Component implements OnInit {
     public filteredData: User[] = [];
     public originalUserData: User[] = [];
     public searchText: string = '';
     
     public searchControl: FormControl = new FormControl(''); // if using switchMap

     constructor(
          private apiService: ApiService
     ) { }

     ngOnInit(): void {
          this.getUserData();
          
          // this.searchUsingRxJs(); // if using switchMap
     }

     public getUserData() {
          this.apiService.getUserData().subscribe({
               next: ((res: any) => {
                    if (res) {
                         this.originalUserData = res?.users || [];
                         this.filteredData = JSON.parse(JSON.stringify(this.originalUserData));
                    }
               }),
               error: ((err: any) => {
                    console.log(err);
               })
          })
     }

     public searchUser() {
          const searchData = this.searchText.toLowerCase();
          this.filteredData = this.originalUserData.filter(user =>
               user.firstName.toLowerCase().includes(searchData) ||
               user.lastName.toLowerCase().includes(searchData) ||
               user.role.toLowerCase().includes(searchData) ||
               user.username.toLowerCase().includes(searchData)
          )
     }

     public searchUsingRxJs() {
          this.searchControl.valueChanges
               .pipe(
                    debounceTime(300),
                    switchMap(search => {
                         const value = search.toLowerCase();
                         return [
                              this.originalUserData.filter(user =>
                                   user.firstName.toLowerCase().includes(value) ||
                                   user.lastName.toLowerCase().includes(value) ||
                                   user.role.toLowerCase().includes(value)
                              )
                         ];
                    })
               )
               .subscribe(data => {
                    this.filteredData = data;
               });
     }

}


// // SEARCH USING ngModel (Template-driven)
// – Always import FormsModule
// – Use for simple forms or search input only
// – Two-way binding [(ngModel)]="variableName" updates value automatically
// – Don't use ngModel with reactive forms
// - Keep original data safe
// - On button click or input change:
//    – convert searchText to lowercase
//    – filter originalUserData & assign data to the filteredUserData
// - Never modify originalUserData


// SEARCH USING FormControl + RxJS (Reactive)
// - Import ReactiveFormsModule
// - Create FormControl for search input  [formControl]="searchForm"
// - Declare this formcontrol in ts -> public searchForm:formControl = new formControl(')
// - Get valueChanges on formcontrol
// - Use Pipe debounceTime for performance
// - Use switchMap when search depends on API / async flow
// - Filter from originalUserData or call API
// - Assign result to filteredData