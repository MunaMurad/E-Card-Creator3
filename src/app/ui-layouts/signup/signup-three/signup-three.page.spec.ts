import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupThreePage } from './signup-three.page';

describe('SignupThreePage', () => {
  let component: SignupThreePage;
  let fixture: ComponentFixture<SignupThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
