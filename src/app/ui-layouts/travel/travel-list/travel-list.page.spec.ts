import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelListPage } from './travel-list.page';

describe('TravelListPage', () => {
  let component: TravelListPage;
  let fixture: ComponentFixture<TravelListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
