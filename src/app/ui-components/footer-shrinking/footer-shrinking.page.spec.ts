import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterShrinkingPage } from './footer-shrinking.page';

describe('FooterShrinkingPage', () => {
  let component: FooterShrinkingPage;
  let fixture: ComponentFixture<FooterShrinkingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterShrinkingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterShrinkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
