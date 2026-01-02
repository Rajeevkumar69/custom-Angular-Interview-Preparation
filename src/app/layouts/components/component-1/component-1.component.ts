import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormModel } from '../../../shared/models/form.model';
import { FormHelper } from '../../../shared/helpers/form.helper';
import { GlobalFormValidators } from '../../../shared/form-validators/global-form-validators';
import { Router } from '@angular/router';

@Component({
     selector: 'app-component-1',
     standalone: false,
     templateUrl: './component-1.component.html',
     styleUrl: './component-1.component.scss'
})
export class Component1Component implements OnInit {
     public userForm: FormGroup = new FormGroup({});
     public formModel: FormModel;
     public formHelper: FormHelper;
     public formErrors: any;
     public validationMessage: any;
     public globalFormValidator: GlobalFormValidators;

     constructor(
          private formBuilder: FormBuilder,
          private router:Router
     ) {
          this.formModel = new FormModel();
          this.formHelper = new FormHelper();
          this.globalFormValidator = new GlobalFormValidators();
     }

     ngOnInit(): void {
          this.initUserForm();
     }

     public initUserForm() {
          this.userForm = this.formBuilder.group({
               firstname: new FormControl('', [Validators.required]),
               lastname: new FormControl('', [Validators.required]),
               university: new FormControl('', [Validators.required]),
               role: new FormControl('', [Validators.required]),
               email: new FormControl('', [Validators.required, Validators.email]),
               phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
          })
          this.loadFormProperty('userForm');
     }

     public submitForm() {
          if (this.userForm.valid) {
               let fData = this.userForm.getRawValue();
               let userData = JSON.stringify(fData);
               localStorage.setItem(userData, 'userData');
               this.userForm.reset();
               this.router.navigateByUrl('component-2');
          } else {
               this.displayAllFormErrors(this.userForm);
          }
     }

     public loadFormProperty(form: string) {
          this.formErrors = this.formModel.formErrors[form];
          this.validationMessage = this.formModel.validationMessage[form];
     }

     public displaySingleFormError(group: FormGroup) {
          this.formErrors = this.globalFormValidator.displaySingleFormError(group, this.formErrors, this.validationMessage);
     }

     public displayAllFormErrors(group: FormGroup) {
          this.formErrors = this.globalFormValidator.displayAllFormErrors(group, this.formErrors, this.validationMessage);
     }
}
