import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmptyStatePage } from './empty-state.page';

describe('EmptyStatePage', () => {
  let component: EmptyStatePage;
  let fixture: ComponentFixture<EmptyStatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyStatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyStatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
