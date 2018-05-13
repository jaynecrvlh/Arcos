import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDicasComponent } from './add-dicas.component';

describe('AddDicasComponent', () => {
  let component: AddDicasComponent;
  let fixture: ComponentFixture<AddDicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
