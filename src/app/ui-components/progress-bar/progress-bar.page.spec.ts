import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgressBarPage } from './progress-bar.page';

describe('ProgressBarPage', () => {
  let component: ProgressBarPage;
  let fixture: ComponentFixture<ProgressBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
