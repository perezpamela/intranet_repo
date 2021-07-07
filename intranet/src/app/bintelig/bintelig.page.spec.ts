import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BinteligPage } from './bintelig.page';

describe('BinteligPage', () => {
  let component: BinteligPage;
  let fixture: ComponentFixture<BinteligPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinteligPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BinteligPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
