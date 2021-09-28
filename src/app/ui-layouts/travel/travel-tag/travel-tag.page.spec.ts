import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelTagPage } from './travel-tag.page';

describe('TravelTagPage', () => {
  let component: TravelTagPage;
  let fixture: ComponentFixture<TravelTagPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelTagPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelTagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
