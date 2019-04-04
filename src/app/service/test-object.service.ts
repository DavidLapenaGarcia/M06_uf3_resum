import { Injectable } from '@angular/core';
import { TestObject } from '../model/testObject.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestObjectService {

  chekerPosible: string[] = ['check1', 'chek2', 'chek3'];
  radioPosible: string[] = ['radio1', 'radio2', 'radio3'];
  selectPosible: string[] = ['select1', 'select2', 'select3'];

  testObjects: TestObject[] = [
    new TestObject( '01', 'name1', new Date(),
                    [this.chekerPosible[0],
                    this.chekerPosible[1]],
                    this.radioPosible[0],
                    this.selectPosible[0],
                    'exampl@example.ex'
                  ),
    new TestObject('02', 'Name2', new Date(), [this.chekerPosible[0]], this.radioPosible[0], this.selectPosible[0],'exampl@example.ex')
  ];

  testObjectsChanged = new EventEmitter<TestObject[]>();

  addTestObject(to: TestObject) {
    const tObj = new TestObject(
      to.getId(),
      to.getName(),
      to.getDate(),
      to.getChecker(),
      to.getRadier(),
      to.getSelector(),
      to.getMail());
    this.testObjects.push(tObj);
    this.testObjectsChanged.emit(this.testObjects.slice());
  }
  getTestObjects(): TestObject[] {
    return this.testObjects.slice();
  }

  getChekersPosible(): string[] {
    return this.chekerPosible.slice();
  }
  getRadioPosible(): string[] {
    return this.radioPosible.slice();
  }
  getSelectPosible(): string[] {
    return this.selectPosible.slice();
  }

}

