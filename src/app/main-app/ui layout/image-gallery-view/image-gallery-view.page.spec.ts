import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageGalleryViewPage } from './image-gallery-view.page';

describe('ImageGalleryViewPage', () => {
  let component: ImageGalleryViewPage;
  let fixture: ComponentFixture<ImageGalleryViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGalleryViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageGalleryViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
