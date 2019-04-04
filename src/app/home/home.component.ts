import { Component, OnInit, ViewChild } from '@angular/core';
import { TestObjectService } from '../service/test-object.service';
import { Pagination } from '../model/pagination.model';
import { CookieService } from 'ngx-cookie-service';
import { TestObject } from '../model/testObject.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('testObjectEntryForm') testObjectEntryForm: HTMLFormElement;
  testObjectForm: TestObject;
  testObjects: TestObject[];

  selects: string[];
  chekers: string[];
  radios: string[];

  pagination: Pagination;

  constructor(private service: TestObjectService,
              private cookie: CookieService) {}


  ngOnInit() {
    // Service
    this.testObjects = this.service.getTestObjects();
    this.chekers = this.service.getChekersPosible();
    this.radios = this.service.getRadioPosible();
    this.selects = this.service.getSelectPosible();
    this.service.testObjectsChanged.
    subscribe(
      (testObjects: TestObject[]) => {
        this.testObjects = testObjects;
    });

    // Cookie
    this.resetForm();
    if (this.cookie.check('ObjectForm')) {
      const cookieObj: any = JSON.parse(this.cookie.get('ObjectForm'));
      Object.assign(this.testObjectForm, cookieObj);
    }
    // Pagination
    this.pagination = new Pagination(this.testObjects.length, 4, 1);
  }

  /*
  @resetForm()
  @description: function that clean the windows
  @params: none
  @return: none
  @date: 2019/03/29
  @authors: David Lapena
  */
  resetForm(): void {
    if (!this.testObjectForm) {
      this.testObjectForm = new TestObject();

      this.testObjectEntryForm.reset();
      this.testObjectEntryForm.form.markAsPristine();

      this.testObjectForm.setId(1);
      this.testObjectForm.setName('Name1');
      this.testObjectForm.setDate( new Date() );
      const chekboxes: string[] = [this.chekers[0], this.chekers[1]];
      this.testObjectForm.setChecker(chekboxes);
      this.testObjectForm.setRadier(this.radios[0]);
      this.testObjectForm.setSelector(this.selects[0]);
      this.testObjectForm.setMail('exemple@exemple.ex');
    }
  }

  /*
  @ObjectEntry()
  @description: function that deletes a cookie if it exists, creates a new one and adds a new to the array
  @params: none
  @return: none
  @date: 2019/03/29
  @authors: David Lapena
  */
  ObjectEntry(): void {

    this.cookie.delete('ObjectForm');
    this.cookie.set('ObjectForm', JSON.stringify(this.testObjectForm));
    this.service.addTestObject(this.testObjectForm);
    // debugger;

  }

  /*
    @onSelect
    @description: function that loads by the selected data of a table
    @params: patient: Patient
    @return: none
    @date: 2019/03/29
    @authors: David Lapena
  */
  onSelect(to: TestObject) {
    this.testObjectForm = to;
  }

 /*
  @addRemoveAllergy()
  @description: function that delete or add allergy
  @params: allergy:string, name of allergy
  @return: none
  @date: 2019/03/29
  @authors: David Lapena
*/
  checkAddRemove(chek: string): void {
    if (this.testObjectForm.getChecker().indexOf(chek) === -1) {
      this.testObjectForm.checker.push(chek);
    } else {
      this.testObjectForm.checker.splice(
        this.testObjectForm.getChecker().indexOf(chek), 1
      );
    }
  }

  /*
  @addRemoveAllergy()
  @description: function that delete or add allergy
  @params: check: string
  @return: none
  @date: 2019/03/29
  @authors: David Lapena
  */
checkIfExists(chek: string): boolean {
    for (const cheker of this.testObjectForm.getChecker()) {
      if (JSON.stringify(cheker) === JSON.stringify(chek)) {
        return true;
      }
    }
    return false;
  }

   /*
    @mayus( :any)
    @description: Transforms all the given values to upper case.
    @params: e: any
    @return: none
    @date: 2019/03/29
    @authors: David Lapena
  */
  mayus(e: any) {
    e.target.value = e.target.value.toUpperCase();
  }



}
