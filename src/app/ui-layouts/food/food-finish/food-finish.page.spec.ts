import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodFinishPage } from './food-finish.page';

describe('FoodFinishPage', () => {
  let component: FoodFinishPage;
  let fixture: ComponentFixture<FoodFinishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodFinishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodFinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
