import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninOnePage } from './signin-one.page';

describe('SigninOnePage', () => {
  let component: SigninOnePage;
  let fixture: ComponentFixture<SigninOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
