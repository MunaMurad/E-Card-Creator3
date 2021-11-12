import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpByeSinglelifePage } from './emp-bye-singlelife.page';

describe('EmpByeSinglelifePage', () => {
  let component: EmpByeSinglelifePage;
  let fixture: ComponentFixture<EmpByeSinglelifePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpByeSinglelifePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpByeSinglelifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
