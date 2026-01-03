import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './components/component-1/component-1.component';
import { Component2Component } from './components/component-2/component-2.component';
import { Component3Component } from './components/component-3/component-3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutsComponent } from './layouts.component';
import { LayoutsRoutingModule } from './layouts-routing.module'
import { MatButtonModule } from '@angular/material/button';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { ProxyCORSComponent } from './components/proxy-cors/proxy-cors.component';
import { SidebarComponent } from './public/sidebar/sidebar.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { BehaviourSubjectComponent } from './components/behaviour-subject/behaviour-subject.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { CashingComponent } from './components/cashing/cashing.component';
import { SignalsComponent } from './components/signals/signals.component';
import { DirectiveComponentComponent } from './components/directive-component/directive-component.component';
import { ChangeBgColorDirective } from '../shared/directives/common.directive';

@NgModule({
     imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          LayoutsRoutingModule,
          HttpClientModule,
          MatButtonModule,
          ChangeBgColorDirective
     ],
     declarations: [
          LayoutsComponent,
          Component1Component,
          Component2Component,
          Component3Component,
          ViewEncapsulationComponent,
          ChangeDetectionComponent,
          DebounceTimeComponent,
          ProxyCORSComponent,
          SidebarComponent,
          LifecycleHooksComponent,
          BehaviourSubjectComponent,
          ChildComponentComponent,
          CashingComponent,
          SignalsComponent,
          DirectiveComponentComponent,
     ],
     providers: [],
})

export class LayoutsModule { }
