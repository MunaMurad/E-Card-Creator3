import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RadioListPage } from './radio-list.page';

describe('RadioListPage', () => {
  let component: RadioListPage;
  let fixture: ComponentFixture<RadioListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RadioListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
