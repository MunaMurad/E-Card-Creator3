import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmptyEidAlfitrPage } from './empty-eid-alfitr.page';

describe('EmptyEidAlfitrPage', () => {
  let component: EmptyEidAlfitrPage;
  let fixture: ComponentFixture<EmptyEidAlfitrPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyEidAlfitrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyEidAlfitrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
