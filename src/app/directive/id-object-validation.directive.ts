import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { TestObjectService } from '../service/test-object.service';
// I do not know when to subscribe to the event changes haved when adding some Disease in the DiseasesService
@Directive({
  selector: '[appIdObjectValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: IdDiseaseValidationDirective, multi: true
  }]
})
export class IdDiseaseValidationDirective implements Validator {

  constructor(private service: TestObjectService) { }

  validate(formFieldToValidate: AbstractControl): { [key: string]: any } {

    let validInput = false;

    if (formFieldToValidate.value != null) {
      if (formFieldToValidate !== undefined) {
        if (formFieldToValidate.value.length > 0 &&
            this.isNotExisist(formFieldToValidate.value)) {
          validInput = true;
        }
      }
    }
    return validInput ? null : { 'IsNotCorrect': true };
  }

  isNotExisist(value: any): boolean {
    let flag = true;
    console.log(value);

    for (let i = 0; i < this.service.getTestObjects().length; i++) {
      if (this.service.getTestObjects()[i].getId() === value) {
        flag = false;
      }
    }
    return flag;
  }
}
