import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderFadingPage } from './header-fading.page';

describe('HeaderFadingPage', () => {
  let component: HeaderFadingPage;
  let fixture: ComponentFixture<HeaderFadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFadingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderFadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
