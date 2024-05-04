import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityLogAddFormComponent } from './activity-log-add-form.component';

describe('ActivityLogAddFormComponent', () => {
  let component: ActivityLogAddFormComponent;
  let fixture: ComponentFixture<ActivityLogAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityLogAddFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityLogAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
