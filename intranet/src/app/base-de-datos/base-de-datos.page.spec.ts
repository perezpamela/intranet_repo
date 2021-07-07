import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaseDeDatosPage } from './base-de-datos.page';

describe('BaseDeDatosPage', () => {
  let component: BaseDeDatosPage;
  let fixture: ComponentFixture<BaseDeDatosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDeDatosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaseDeDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
