import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealListPage } from './real-list.page';

describe('RealListPage', () => {
  let component: RealListPage;
  let fixture: ComponentFixture<RealListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
