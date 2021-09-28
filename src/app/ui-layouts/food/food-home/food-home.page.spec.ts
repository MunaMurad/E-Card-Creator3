import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodHomePage } from './food-home.page';

describe('FoodHomePage', () => {
  let component: FoodHomePage;
  let fixture: ComponentFixture<FoodHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
