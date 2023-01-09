import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStibComponent } from './api-stib.component';

describe('ApiStibComponent', () => {
  let component: ApiStibComponent;
  let fixture: ComponentFixture<ApiStibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiStibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiStibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
