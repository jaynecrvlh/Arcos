import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesSecoesComponent } from './detalhes-secoes.component';

describe('DetalhesSecoesComponent', () => {
  let component: DetalhesSecoesComponent;
  let fixture: ComponentFixture<DetalhesSecoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesSecoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesSecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
