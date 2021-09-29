import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealMapPage } from './real-map.page';

describe('RealMapPage', () => {
  let component: RealMapPage;
  let fixture: ComponentFixture<RealMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
