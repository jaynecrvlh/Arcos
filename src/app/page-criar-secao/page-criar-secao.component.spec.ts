import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCriarSecaoComponent } from './page-criar-secao.component';

describe('PageCriarSecaoComponent', () => {
  let component: PageCriarSecaoComponent;
  let fixture: ComponentFixture<PageCriarSecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCriarSecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCriarSecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
