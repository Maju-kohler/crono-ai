import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLandingComponent } from './app-landing.component';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

describe('AppLandingComponent', () => {
  let component: AppLandingComponent;
  let fixture: ComponentFixture<AppLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLandingComponent, RouterLink, RouterOutlet, RouterLinkActive]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
