import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapTwoPage } from './map-two.page';

describe('MapTwoPage', () => {
  let component: MapTwoPage;
  let fixture: ComponentFixture<MapTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
