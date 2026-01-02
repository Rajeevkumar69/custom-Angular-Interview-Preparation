import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
     selector: 'app-view-encapsulation',
     standalone: false,
     templateUrl: './view-encapsulation.component.html',
     styleUrl: './view-encapsulation.component.scss',
     encapsulation:ViewEncapsulation.Emulated   //bydefault
     // encapsulation:ViewEncapsulation.None
     // encapsulation:ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationComponent implements OnInit {


     constructor() {

     }

     ngOnInit(): void {

     }
}
