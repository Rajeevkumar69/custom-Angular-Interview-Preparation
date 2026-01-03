import { Component, computed, effect, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { toSignal } from '@angular/core/rxjs-interop';

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

     public employeeData = signal({
          empId: 11,
          empName: 'Harsh Mittal',
          empCity: 'Delhi',
          empPinCode: 851109
     })

     public fstName = signal('');
     public lstName = signal('');
     public fullName = computed(() => {
          return `${this.fstName()} ${this.lstName()}`;
     });


     constructor(
          private apiService: ApiService
     ) {
          this.userName.set('Harsh Babu');
          // this.userNickName.set('Rajeev Kumar Gupta'); // we can't do this bcz we defined the signal as type Signal So either we need to define the signal type as :Writable<string> or we need to create a signal without defined data-type
          this.cityList.update((oldValue) => [...oldValue, 'Punjab', 'Kolkata']);

          // Effect used for some logic perform on real time (during changing the form value we want some performance)
          effect(() => {
               console.log(`Effect ${this.fstName()}`);
          });

          // toSignal
          const userData = toSignal(
               this.apiService.getUserData(),
               { initialValue: {} }
          );
          setTimeout(() => {
               console.log(userData());
          }, 5000);
     }

     ngOnInit(): void {
     }

     public changeEmpFormValue(event: any, keyName: string) {
          let value = event.target?.value;
          this.employeeData.update((oldObj) => ({ ...oldObj, [keyName]: value }))
     }

     public computedUserName(event: Event, field: string) {
          const value = (event.target as HTMLInputElement).value;
          if (field === 'fstName') {
               this.fstName.set(value);
          } else {
               this.lstName.set(value);
          }
     }
}
