import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoInicialComponent } from './botao-inicial.component';

describe('BotaoInicialComponent', () => {
  let component: BotaoInicialComponent;
  let fixture: ComponentFixture<BotaoInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
