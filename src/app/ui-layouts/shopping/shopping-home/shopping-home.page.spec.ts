import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppingHomePage } from './shopping-home.page';

describe('ShoppingHomePage', () => {
  let component: ShoppingHomePage;
  let fixture: ComponentFixture<ShoppingHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
