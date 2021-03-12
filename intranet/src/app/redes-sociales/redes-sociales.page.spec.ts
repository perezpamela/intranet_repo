import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedesSocialesPage } from './redes-sociales.page';

describe('RedesSocialesPage', () => {
  let component: RedesSocialesPage;
  let fixture: ComponentFixture<RedesSocialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedesSocialesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedesSocialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
