import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaLanguageComponent } from './vista-language.component';

describe('VistaLanguageComponent', () => {
  let component: VistaLanguageComponent;
  let fixture: ComponentFixture<VistaLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaLanguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
