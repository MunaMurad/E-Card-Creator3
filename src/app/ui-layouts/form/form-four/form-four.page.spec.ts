import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormFourPage } from './form-four.page';

describe('FormFourPage', () => {
  let component: FormFourPage;
  let fixture: ComponentFixture<FormFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
