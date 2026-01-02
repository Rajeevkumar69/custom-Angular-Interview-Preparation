export class FormHelper {
     public passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$';
     public passwordCriteriaList = [
          { fieldName: 'length', isValid: false, criteria: '8 to 20 Characters' },
          { fieldName: 'caseFormat', isValid: false, criteria: 'Upper and lower cases' },
          {
               fieldName: 'letterCombination',
               isValid: false,
               criteria: 'Combination of letters and numbers',
          },
          {
               fieldName: 'specialCharacter',
               isValid: false,
               criteria: 'Contain at least 1 special character',
          },
     ];
}