import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmptyMarriageContractPage } from './empty-marriage-contract.page';

describe('EmptyMarriageContractPage', () => {
  let component: EmptyMarriageContractPage;
  let fixture: ComponentFixture<EmptyMarriageContractPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyMarriageContractPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyMarriageContractPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
