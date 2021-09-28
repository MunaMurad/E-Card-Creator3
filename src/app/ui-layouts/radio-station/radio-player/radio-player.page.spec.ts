import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RadioPlayerPage } from './radio-player.page';

describe('RadioPlayerPage', () => {
  let component: RadioPlayerPage;
  let fixture: ComponentFixture<RadioPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioPlayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RadioPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
