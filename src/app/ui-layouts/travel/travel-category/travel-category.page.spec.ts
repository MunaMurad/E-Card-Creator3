import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelCategoryPage } from './travel-category.page';

describe('TravelCategoryPage', () => {
  let component: TravelCategoryPage;
  let fixture: ComponentFixture<TravelCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
