import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderShrinkingPage } from './header-shrinking.page';

describe('HeaderShrinkingPage', () => {
  let component: HeaderShrinkingPage;
  let fixture: ComponentFixture<HeaderShrinkingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderShrinkingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderShrinkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
