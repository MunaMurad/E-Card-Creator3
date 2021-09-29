import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UiColorsPage } from './ui-colors.page';

describe('UiColorsPage', () => {
  let component: UiColorsPage;
  let fixture: ComponentFixture<UiColorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiColorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UiColorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
