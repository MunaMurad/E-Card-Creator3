import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormHomePage } from './form-home.page';

describe('FormHomePage', () => {
  let component: FormHomePage;
  let fixture: ComponentFixture<FormHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
