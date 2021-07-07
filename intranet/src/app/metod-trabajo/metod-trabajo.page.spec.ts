import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetodTrabajoPage } from './metod-trabajo.page';

describe('MetodTrabajoPage', () => {
  let component: MetodTrabajoPage;
  let fixture: ComponentFixture<MetodTrabajoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodTrabajoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetodTrabajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
