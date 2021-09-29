import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FireSignupPage } from './fire-signup.page';

describe('FireSignupPage', () => {
  let component: FireSignupPage;
  let fixture: ComponentFixture<FireSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FireSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
