import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageApresentacaoComponent } from './page-apresentacao.component';

describe('PageApresentacaoComponent', () => {
  let component: PageApresentacaoComponent;
  let fixture: ComponentFixture<PageApresentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageApresentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
