import {
     AfterContentChecked,
     AfterContentInit,
     AfterViewChecked,
     AfterViewInit,
     Component,
     DoCheck,
     ElementRef,
     Input,
     OnChanges,
     OnDestroy,
     OnInit,
     SimpleChanges,
     ViewChild
} from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Subject, takeUntil } from 'rxjs';
declare var $: any;

@Component({
     selector: 'app-lifecycle-hooks',
     templateUrl: './lifecycle-hooks.component.html',
     standalone:false,
     styleUrl: './lifecycle-hooks.component.scss'
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,

     AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

     @ViewChild('searchField') searchField!: ElementRef;

     private destroy$ = new Subject<void>();

     public name: string | undefined; // Store result of button click
     @Input() searchText: string = ''; // Input property

     constructor(private apiService: ApiService) { }

     ngOnChanges(changes: SimpleChanges): void {
          // Called whenever any @Input property changes
          if (changes['searchText']) {
               console.log('searchText changed:', changes['searchText'].currentValue);

               // Update input field if view is initialized
               if (this.searchField) {
                    this.searchField.nativeElement.value = changes['searchText'].currentValue;
               }
          }
     }

     ngOnInit(): void {
          // Called once component is initialized
          // Note: Template elements are NOT available here
          // Example of what you cannot do:
          // const value = this.searchField.nativeElement?.value; // ❌ Error

          // Subscribe to API Service
          this.apiService.product
               .pipe(takeUntil(this.destroy$))
               .subscribe((res: any) => {
                    console.log(res);
               });
     }

     ngDoCheck(): void {
          // Called during every change detection run
          console.log('DoCheck executed');
     }

     ngAfterContentInit(): void {
          // Called once after content (ng-content) is projected
          console.log('AfterContentInit executed');
          const data = $('#elemId').width();
          console.log('Element width:', data);
     }

     ngAfterContentChecked(): void {
          // Called after every check of projected content
          console.log('AfterContentChecked executed');
     }

     ngAfterViewInit(): void {
          // Called once after component's view is initialized
          const value = this.searchField.nativeElement?.value;
          console.log('AfterViewInit value:', value);
     }

     ngAfterViewChecked(): void {
          // Called after every check of component's view and child views
          console.log('AfterViewChecked executed');
     }

     ngOnDestroy(): void {
          // Called just before component is destroyed
          // Clean up subscriptions to avoid memory leaks
          this.destroy$.next();
          this.destroy$.complete();
     }

     public getData(): void {
          // Get value from input and assign name
          const value = this.searchField.nativeElement.value;
          console.log('Button clicked, input value:', value);
          this.name = 'Rajeev Kumar';
     }

}
