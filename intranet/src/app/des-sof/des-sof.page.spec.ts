import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesSofPage } from './des-sof.page';

describe('DesSofPage', () => {
  let component: DesSofPage;
  let fixture: ComponentFixture<DesSofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesSofPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesSofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
