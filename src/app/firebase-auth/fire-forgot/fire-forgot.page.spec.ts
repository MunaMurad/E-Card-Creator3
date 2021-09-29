import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FireForgotPage } from './fire-forgot.page';

describe('FireForgotPage', () => {
  let component: FireForgotPage;
  let fixture: ComponentFixture<FireForgotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireForgotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FireForgotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
