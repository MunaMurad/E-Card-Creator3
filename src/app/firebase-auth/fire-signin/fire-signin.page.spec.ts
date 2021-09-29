import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FireSigninPage } from './fire-signin.page';

describe('FireSigninPage', () => {
  let component: FireSigninPage;
  let fixture: ComponentFixture<FireSigninPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireSigninPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FireSigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
