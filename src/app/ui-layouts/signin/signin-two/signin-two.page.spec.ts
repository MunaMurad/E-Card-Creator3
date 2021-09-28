import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninTwoPage } from './signin-two.page';

describe('SigninTwoPage', () => {
  let component: SigninTwoPage;
  let fixture: ComponentFixture<SigninTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
