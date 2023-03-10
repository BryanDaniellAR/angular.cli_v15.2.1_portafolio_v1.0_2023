import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPortafolioComponent } from './vista-portafolio.component';

describe('VistaPortafolioComponent', () => {
  let component: VistaPortafolioComponent;
  let fixture: ComponentFixture<VistaPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPortafolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
