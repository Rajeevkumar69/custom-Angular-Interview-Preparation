import { Component, OnInit, signal, Signal, WritableSignal } from '@angular/core';

@Component({
     selector: 'app-signals',
     standalone: false,
     templateUrl: './signals.component.html',
     styleUrl: './signals.component.scss'
})
export class SignalsComponent implements OnInit {
     public userName = signal('Rajeev Kumar');
     public userNickName: Signal<string> = signal(undefined);
     public cityList = signal(['Begusarai', 'Barauni', 'Darbhanga']);
     public userData: Signal<{}> = signal({
          name: 'ChamchamG',
          rollNo: 24,
          address: {
               home: 'Begusarai',
               pinCode: 851101
          }
     })


     constructor() {
          this.userName.set('Harsh Babu');
          // this.userNickName.set('Rajeev Kumar Gupta'); // we can't do this bcz we defined the signal as type Signal So either we need to define the signal type as :Writable<string> or we need to create a signal without defined data-type
          this.cityList.update((oldValue)=> [...oldValue, 'Punjab', 'Kolkata']);
     }

     ngOnInit(): void {

     }


}
