import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealDetailPage } from './real-detail.page';

describe('RealDetailPage', () => {
  let component: RealDetailPage;
  let fixture: ComponentFixture<RealDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
