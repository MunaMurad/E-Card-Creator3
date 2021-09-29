import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealAgentDetailPage } from './real-agent-detail.page';

describe('RealAgentDetailPage', () => {
  let component: RealAgentDetailPage;
  let fixture: ComponentFixture<RealAgentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealAgentDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealAgentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
