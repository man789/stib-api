import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StibComponent } from './stib.component';

describe('StibComponent', () => {
  let component: StibComponent;
  let fixture: ComponentFixture<StibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
