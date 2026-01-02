import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
     selector: 'app-cashing',
     standalone: false,
     templateUrl: './cashing.component.html',
     styleUrl: './cashing.component.scss'
})
export class CashingComponent implements OnInit {
     public userId!: number;

     constructor(
          private apiService: ApiService
     ) { }

     ngOnInit(): void {

     }

     public getUserData(): void {
          if (!this.userId) {
               console.log('UserId is required');
               return;
          }
          this.apiService.getUserById(this.userId).subscribe({
               next: (res: any) => {
                    console.log(res);
               },
               error: (err: any) => {
                    console.log(err);
               }
          });
     }

}
