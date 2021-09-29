import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerticalCardPage } from './vertical-card.page';

describe('VerticalCardPage', () => {
  let component: VerticalCardPage;
  let fixture: ComponentFixture<VerticalCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
