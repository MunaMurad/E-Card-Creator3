import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapHomePage } from './map-home.page';

describe('MapHomePage', () => {
  let component: MapHomePage;
  let fixture: ComponentFixture<MapHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
