import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FireProfilePage } from './fire-profile.page';

describe('FireProfilePage', () => {
  let component: FireProfilePage;
  let fixture: ComponentFixture<FireProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FireProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
