import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasonryPage } from './masonry.page';

describe('MasonryPage', () => {
  let component: MasonryPage;
  let fixture: ComponentFixture<MasonryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasonryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
