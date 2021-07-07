import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecHumanosPage } from './rec-humanos.page';

describe('RecHumanosPage', () => {
  let component: RecHumanosPage;
  let fixture: ComponentFixture<RecHumanosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecHumanosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecHumanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
