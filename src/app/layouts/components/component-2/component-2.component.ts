import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { User } from '../../../shared/interfaces/common.interface';

@Component({
     selector: 'app-component-2',
     standalone: false,
     templateUrl: './component-2.component.html',
     styleUrl: './component-2.component.scss'
})
export class Component2Component implements OnInit {
     public userData: User[] = [];


     constructor(
          private apiService: ApiService
     ) {

     }

     ngOnInit(): void {
          this.getUserData();
     }

     public getUserData() {
          this.apiService.getUserData().subscribe({
               next: ((res: any) => {
                    if (res) {
                         this.userData = res?.users;
                    }
               }),
               error: ((err: any) => {
                    console.log(err);
               })
          })
     }

}
