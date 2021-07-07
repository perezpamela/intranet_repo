import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusquedasActivasPage } from './busquedas-activas.page';

describe('BusquedasActivasPage', () => {
  let component: BusquedasActivasPage;
  let fixture: ComponentFixture<BusquedasActivasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedasActivasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusquedasActivasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
