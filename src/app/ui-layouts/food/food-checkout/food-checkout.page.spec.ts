import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodCheckoutPage } from './food-checkout.page';

describe('FoodCheckoutPage', () => {
  let component: FoodCheckoutPage;
  let fixture: ComponentFixture<FoodCheckoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCheckoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodCheckoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
