import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelDetailPage } from './travel-detail.page';

describe('TravelDetailPage', () => {
  let component: TravelDetailPage;
  let fixture: ComponentFixture<TravelDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
