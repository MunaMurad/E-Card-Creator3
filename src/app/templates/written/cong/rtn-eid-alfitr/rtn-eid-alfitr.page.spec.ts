import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RtnEidAlfitrPage } from './rtn-eid-alfitr.page';

describe('RtnEidAlfitrPage', () => {
  let component: RtnEidAlfitrPage;
  let fixture: ComponentFixture<RtnEidAlfitrPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RtnEidAlfitrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RtnEidAlfitrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
