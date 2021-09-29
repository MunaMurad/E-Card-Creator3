import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelHomePage } from './travel-home.page';

describe('TravelHomePage', () => {
  let component: TravelHomePage;
  let fixture: ComponentFixture<TravelHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
