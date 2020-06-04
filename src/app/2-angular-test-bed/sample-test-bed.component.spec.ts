import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTestBedComponent } from './sample-test-bed.component';

describe('SampleTestBedComponent', () => {
  let component: SampleTestBedComponent;
  let fixture: ComponentFixture<SampleTestBedComponent>;
  let inputWord = '';
  let inputWordMoreThan10 = '';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTestBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTestBedComponent);
    component = fixture.componentInstance;
    inputWord = 'qwertyuiop';
    inputWordMoreThan10 = 'qweqrtyuioasdfg';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false if word is less than or equal 10', () => {
    expect(component.characterLimitTen(inputWord)).toBeFalsy();
  });

  it('should return true if word is more than 10', () => {
    expect(component.characterLimitTen(inputWordMoreThan10)).toBeTruthy();
  });

});
