import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapThreePage } from './map-three.page';

describe('MapThreePage', () => {
  let component: MapThreePage;
  let fixture: ComponentFixture<MapThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
