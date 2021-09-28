import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealHomePage } from './real-home.page';

describe('RealHomePage', () => {
  let component: RealHomePage;
  let fixture: ComponentFixture<RealHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
