import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DicsyanosPage } from './dicsyanos.page';

describe('DicsyanosPage', () => {
  let component: DicsyanosPage;
  let fixture: ComponentFixture<DicsyanosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicsyanosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DicsyanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
