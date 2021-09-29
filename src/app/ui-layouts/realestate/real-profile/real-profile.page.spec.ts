import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealProfilePage } from './real-profile.page';

describe('RealProfilePage', () => {
  let component: RealProfilePage;
  let fixture: ComponentFixture<RealProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
