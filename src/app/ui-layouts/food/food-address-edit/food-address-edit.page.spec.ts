import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodAddressEditPage } from './food-address-edit.page';

describe('FoodAddressEditPage', () => {
  let component: FoodAddressEditPage;
  let fixture: ComponentFixture<FoodAddressEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAddressEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodAddressEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
