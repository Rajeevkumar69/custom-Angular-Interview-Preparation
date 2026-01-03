import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../../shared/interfaces/common.interface';

@Component({
     selector: 'app-sidebar',
     standalone: false,
     templateUrl: './sidebar.component.html',
     styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
     public menuItems: MenuItem[] = [
          {
               label: 'Reactive Forms',
               route: '/reactive-form',
               icon: 'bi bi-ui-checks'
          },
          {
               label: 'Users',
               route: '/users-list',
               icon: 'bi bi-people'
          },
          {
               label: 'Auth Guard',
               route: '/auth-guard',
               icon: 'bi bi-shield-lock'
          },
          {
               label: 'View Encapsulation',
               route: '/view-encapsulation',
               icon: 'bi bi-arrow-repeat'
          },
          {
               label: 'Change Detection',
               route: '/change-detection',
               icon: 'bi bi-lightning'
          },
          {
               label: 'RxJs Example',
               route: '/rxjs-example',
               icon: 'bi bi-hourglass-split'
          },
          {
               label: 'Proxy & CORS',
               route: '/proxy-cors',
               icon: 'bi bi-diagram-3'
          },
          {
               label: 'Angular LifeCycle',
               route: '/lifecycle-hooks',
               icon: 'bi bi-arrow-clockwise'
          },
          {
               label: 'Behaviour Subject',
               route: '/behaviour-subject',
               icon: 'bi-arrow-repeat'
          },
          {
               label:'Cashing Data',
               route:'/cashing',
               icon:'bi bi-fonts'
          },
          {
               label:'Angular Signals',
               route:'/signals',
               icon:'bi bi-app-indicator'
          },
          {
               label:'Angular Directives',
               route:'/directives',
               icon:'bi bi-bounding-box'
          }

     ];


     constructor(private router: Router) { }

     ngOnInit(): void {

     }

     navigate(route: string): void {
          this.router.navigate([route]);
     }

     isActive(route: string): boolean {
          return this.router.url === route;
     }

}
