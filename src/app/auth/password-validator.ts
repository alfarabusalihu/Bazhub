import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordValidator = (formGroup: AbstractControl): ValidationErrors | null => {
    // console.log("passwordValidator", formGroup)
    const passwordValue = formGroup.get('password').value;
    const confirmPasswordValue = formGroup.get('confirmPassword').value;
    // console.log(confirmPasswordValue, passwordValue)
    return passwordValue === confirmPasswordValue ? null : { passwordValidity: true };
}
