import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealImageViewPage } from './real-image-view.page';

describe('RealImageViewPage', () => {
  let component: RealImageViewPage;
  let fixture: ComponentFixture<RealImageViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealImageViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealImageViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
