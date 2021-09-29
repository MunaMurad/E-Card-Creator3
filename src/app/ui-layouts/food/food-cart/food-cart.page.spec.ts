import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodCartPage } from './food-cart.page';

describe('FoodCartPage', () => {
  let component: FoodCartPage;
  let fixture: ComponentFixture<FoodCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
