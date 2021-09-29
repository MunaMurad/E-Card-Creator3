import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealCategoryPage } from './real-category.page';

describe('RealCategoryPage', () => {
  let component: RealCategoryPage;
  let fixture: ComponentFixture<RealCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
