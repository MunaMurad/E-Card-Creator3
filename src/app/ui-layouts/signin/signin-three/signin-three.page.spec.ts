import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninThreePage } from './signin-three.page';

describe('SigninThreePage', () => {
  let component: SigninThreePage;
  let fixture: ComponentFixture<SigninThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
