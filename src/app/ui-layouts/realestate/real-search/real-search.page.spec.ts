import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealSearchPage } from './real-search.page';

describe('RealSearchPage', () => {
  let component: RealSearchPage;
  let fixture: ComponentFixture<RealSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
