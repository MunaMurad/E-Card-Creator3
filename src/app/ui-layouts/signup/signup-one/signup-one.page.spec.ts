import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupOnePage } from './signup-one.page';

describe('SignupOnePage', () => {
  let component: SignupOnePage;
  let fixture: ComponentFixture<SignupOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
