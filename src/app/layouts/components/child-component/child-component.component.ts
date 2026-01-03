import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
     selector: 'app-child-component',
     standalone: false,
     templateUrl: './child-component.component.html',
     styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent implements OnInit {

     constructor(
          private apiService: ApiService
     ) { }

     ngOnInit(): void {
     }

     public changeFormValue(event: any) {
          const input = event.target as HTMLInputElement;
          this.apiService.setChildFormData({
               [input.type]: input.value
          });
     }

}
