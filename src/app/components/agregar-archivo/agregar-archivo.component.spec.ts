import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarArchivoComponent } from './agregar-archivo.component';

describe('AgregarArchivoComponent', () => {
  let component: AgregarArchivoComponent;
  let fixture: ComponentFixture<AgregarArchivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarArchivoComponent]
    });
    fixture = TestBed.createComponent(AgregarArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
