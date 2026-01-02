import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/common.interface';
import { ApiService } from '../../../shared/services/api.service';

@Component({
     selector: 'app-change-detection',
     standalone: false,
     templateUrl: './change-detection.component.html',
     styleUrl: './change-detection.component.scss',
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {
     public userList: User[] = [];

     constructor(
          private apiService: ApiService,
          private changeDetection: ChangeDetectorRef
     ) {}

     ngOnInit(): void {
          this.getUserData();
     }

     public clickButton(event:Event) {
          console.log(event.type);
     }

     public getUserData() {
          this.apiService.getUserData().subscribe({
               next: ((res: any) => {
                    if (res) {
                         this.userList = res.users;
                         // setTimeout(() => {
                         //   this.changeDetection.detectChanges();
                         // }, 5000);
                    }
               }),
               error: ((error: any) => {
                    console.log(error);
               })
          })
     }

}
