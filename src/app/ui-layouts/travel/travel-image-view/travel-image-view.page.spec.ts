import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelImageViewPage } from './travel-image-view.page';

describe('TravelImageViewPage', () => {
  let component: TravelImageViewPage;
  let fixture: ComponentFixture<TravelImageViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelImageViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelImageViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
