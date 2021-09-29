import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapOnePage } from './map-one.page';

describe('MapOnePage', () => {
  let component: MapOnePage;
  let fixture: ComponentFixture<MapOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
