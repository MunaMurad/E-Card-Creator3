import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninHomePage } from './signin-home.page';

describe('SigninHomePage', () => {
  let component: SigninHomePage;
  let fixture: ComponentFixture<SigninHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
