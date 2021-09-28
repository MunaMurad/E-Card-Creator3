import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodSearchPage } from './food-search.page';

describe('FoodSearchPage', () => {
  let component: FoodSearchPage;
  let fixture: ComponentFixture<FoodSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
