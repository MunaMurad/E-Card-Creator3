import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimationPage } from './animation.page';

describe('AnimationPage', () => {
  let component: AnimationPage;
  let fixture: ComponentFixture<AnimationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
