import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { Component1Component } from './components/component-1/component-1.component';
import { Component2Component } from './components/component-2/component-2.component';
import { Component3Component } from './components/component-3/component-3.component';
import { UserLoggedInGuard } from '../shared/guards/auth.guard';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { ProxyCORSComponent } from './components/proxy-cors/proxy-cors.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { BehaviourSubjectComponent } from './components/behaviour-subject/behaviour-subject.component';
import { CashingComponent } from './components/cashing/cashing.component';
import { SignalsComponent } from './components/signals/signals.component';
import { DirectiveComponentComponent } from './components/directive-component/directive-component.component';
const routes: Routes = [
     {
          path: '',
          component: LayoutsComponent,
          children: [
               {
                    path: '',
                    redirectTo: 'reactive-form',
                    pathMatch: 'full'
               },
               {
                    path: 'reactive-form',
                    component: Component1Component
               },
               {
                    path: 'users-list',
                    component: Component2Component
               },
               {
                    path: 'auth-guard',
                    component: Component3Component,
                    // canActivate:[UserLoggedInGuard]
               },
               {
                    path:'view-encapsulation',
                    component:ViewEncapsulationComponent
               },
               {
                    path:'change-detection',
                    component:ChangeDetectionComponent
               },
               {
                    path:'rxjs-example',
                    component:DebounceTimeComponent
               },
               {
                    path:'proxy-cors',
                    component:ProxyCORSComponent
               },
               {
                    path:'lifecycle-hooks',
                    component:LifecycleHooksComponent
               },
               {
                    path:'behaviour-subject',
                    component:BehaviourSubjectComponent
               },
               {
                    path:'cashing',
                    component:CashingComponent
               },
               {
                    path:'signals',
                    component:SignalsComponent
               },
               {
                    path:'directives',
                    component:DirectiveComponentComponent
               }
          ]
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})
export class LayoutsRoutingModule { }