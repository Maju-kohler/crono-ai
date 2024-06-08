import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppApiKeysComponent } from './app-api-keys.component';

describe('AppApiKeysComponent', () => {
  let component: AppApiKeysComponent;
  let fixture: ComponentFixture<AppApiKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppApiKeysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppApiKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
