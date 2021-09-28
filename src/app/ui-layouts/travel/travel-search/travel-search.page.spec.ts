import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelSearchPage } from './travel-search.page';

describe('TravelSearchPage', () => {
  let component: TravelSearchPage;
  let fixture: ComponentFixture<TravelSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
