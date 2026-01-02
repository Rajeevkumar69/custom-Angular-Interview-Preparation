export class FormModel {
     public passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$';
     public validNumberRegex = '^[0-9]+(.[0-9]+)?$';
     public validStringRegex = '^[a-zA-Z0-9,+*& \\_\\-.\\(\\)\\[\\]/%]+$';

     public numberValidationMessage =
          'Enter a valid number. It can be an integer or a decimal (e.g., 123 or 123.45).';
     public stringValidationMessage =
          'Please enter a valid string using letters, numbers, and these symbols: , + * & _ - . ( ) [ ] / %. Spaces are also allowed.';
     public passwordValidationMsg =
          'Password must be 8-20 characters with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (e.g., @, #, $).';
     public webUrlValidationMsg = 'Please enter valid URL.';

     public formErrors: any = {
          userForm: {
               firstname: '',
               lastname: '',
               university: '',
               role: '',
               email:'',
               phone:''
          },
     };

     public validationMessage: any = {
          userForm: {
               firstname: {
                    required: 'First name is required.',

               },
               lastname: {
                    required: 'Last name is required.',
               },
               university: {
                    required: 'University name is required'
               },
               role: {
                    required: 'Role is required'
               },
               email:{
                    required:'Email is required',
                    email:'Enter valid email'
               },
               phone:{
                    required:'Phone is required',
                    maxlength:'Phone number must be 10 digits',
                    minlength:'Phone number must be 10 digits',
                    number:'Phone number must be digits'
               }
          },
     };
}