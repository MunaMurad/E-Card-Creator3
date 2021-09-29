import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupHomePage } from './signup-home.page';

describe('SignupHomePage', () => {
  let component: SignupHomePage;
  let fixture: ComponentFixture<SignupHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
