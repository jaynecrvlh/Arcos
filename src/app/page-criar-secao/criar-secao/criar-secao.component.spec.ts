import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarSecaoComponent } from './criar-secao.component';

describe('CriarSecaoComponent', () => {
  let component: CriarSecaoComponent;
  let fixture: ComponentFixture<CriarSecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarSecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarSecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
