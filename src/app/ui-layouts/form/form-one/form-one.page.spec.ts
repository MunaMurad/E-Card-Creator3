import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormOnePage } from './form-one.page';

describe('FormOnePage', () => {
  let component: FormOnePage;
  let fixture: ComponentFixture<FormOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
