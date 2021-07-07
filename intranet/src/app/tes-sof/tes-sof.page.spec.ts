import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TesSofPage } from './tes-sof.page';

describe('TesSofPage', () => {
  let component: TesSofPage;
  let fixture: ComponentFixture<TesSofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesSofPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TesSofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
