import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelMapPage } from './travel-map.page';

describe('TravelMapPage', () => {
  let component: TravelMapPage;
  let fixture: ComponentFixture<TravelMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
