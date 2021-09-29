import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodListPage } from './food-list.page';

describe('FoodListPage', () => {
  let component: FoodListPage;
  let fixture: ComponentFixture<FoodListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
