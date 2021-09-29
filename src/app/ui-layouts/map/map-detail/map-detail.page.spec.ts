import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapDetailPage } from './map-detail.page';

describe('MapDetailPage', () => {
  let component: MapDetailPage;
  let fixture: ComponentFixture<MapDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
