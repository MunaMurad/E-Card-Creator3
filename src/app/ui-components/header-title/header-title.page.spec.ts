import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderTitlePage } from './header-title.page';

describe('HeaderTitlePage', () => {
  let component: HeaderTitlePage;
  let fixture: ComponentFixture<HeaderTitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTitlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
