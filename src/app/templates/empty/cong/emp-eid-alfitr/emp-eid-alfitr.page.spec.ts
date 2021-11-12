import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpEidAlfitrPage } from './emp-eid-alfitr.page';

describe('EmpEidAlfitrPage', () => {
  let component: EmpEidAlfitrPage;
  let fixture: ComponentFixture<EmpEidAlfitrPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpEidAlfitrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpEidAlfitrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
