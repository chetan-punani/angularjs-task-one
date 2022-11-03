import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdropdownComponent } from './customdropdown.component';

describe('CustomdropdownComponent', () => {
  let component: CustomdropdownComponent;
  let fixture: ComponentFixture<CustomdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomdropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
