import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderTransparentPage } from './header-transparent.page';

describe('HeaderTransparentPage', () => {
  let component: HeaderTransparentPage;
  let fixture: ComponentFixture<HeaderTransparentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTransparentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderTransparentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
