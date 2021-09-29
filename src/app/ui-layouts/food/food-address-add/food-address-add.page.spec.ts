import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodAddressAddPage } from './food-address-add.page';

describe('FoodAddressAddPage', () => {
  let component: FoodAddressAddPage;
  let fixture: ComponentFixture<FoodAddressAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAddressAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodAddressAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
