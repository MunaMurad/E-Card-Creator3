import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RtnByeSinglelifePage } from './rtn-bye-singlelife.page';

describe('RtnByeSinglelifePage', () => {
  let component: RtnByeSinglelifePage;
  let fixture: ComponentFixture<RtnByeSinglelifePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RtnByeSinglelifePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RtnByeSinglelifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
