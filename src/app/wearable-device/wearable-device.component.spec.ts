import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearableDeviceComponent } from './wearable-device.component';

describe('WearableDeviceComponent', () => {
  let component: WearableDeviceComponent;
  let fixture: ComponentFixture<WearableDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WearableDeviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WearableDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
