import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleDragonballPage } from './detalle-dragonball.page';

describe('DetalleDragonballPage', () => {
  let component: DetalleDragonballPage;
  let fixture: ComponentFixture<DetalleDragonballPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDragonballPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
