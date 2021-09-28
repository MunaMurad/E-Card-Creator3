import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodTabsPage } from './food-tabs.page';

describe('FoodTabsPage', () => {
  let component: FoodTabsPage;
  let fixture: ComponentFixture<FoodTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
