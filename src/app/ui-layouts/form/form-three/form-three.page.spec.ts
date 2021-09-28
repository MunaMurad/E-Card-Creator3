import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormThreePage } from './form-three.page';

describe('FormThreePage', () => {
  let component: FormThreePage;
  let fixture: ComponentFixture<FormThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
