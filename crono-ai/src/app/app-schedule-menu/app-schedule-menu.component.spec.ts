import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScheduleMenuComponent } from './app-schedule-menu.component';
import { AppFormComponent } from '../app-form/app-form.component';

describe('AppScheduleMenuComponent', () => {
  let component: AppScheduleMenuComponent;
  let fixture: ComponentFixture<AppScheduleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppScheduleMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppScheduleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
