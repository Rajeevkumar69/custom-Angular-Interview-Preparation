import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';

@Component({
     selector: 'app-behaviour-subject',
     standalone: false,
     templateUrl: './behaviour-subject.component.html',
     styleUrl: './behaviour-subject.component.scss'
})
export class BehaviourSubjectComponent implements OnInit {
     public userName$ = new Subject<string>();

     constructor(
          private apiService:ApiService
     ) { 
          setTimeout(() => {
               this.userName$.next("Rajeev Kumar");
          }, 3000);

          this.apiService.$courseDuration.next("3 Month 1 Week");
     }

     ngOnInit(): void {
          this.userName$.subscribe((res:any)=>{
               console.log(res);
          })

          this.apiService.$courseDuration.subscribe((res:any)=>{
               console.log(res);
          })

          this.apiService.$userRole.subscribe((res:any)=>{
               console.log(res);
          })
     }

     public OnRoleChange(event:any){
         this.apiService.$userRole.next(event.target?.value);
     }

}