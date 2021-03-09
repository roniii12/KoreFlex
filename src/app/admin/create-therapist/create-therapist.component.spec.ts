import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTherapistComponent } from './create-therapist.component';

describe('CreateTherapistComponent', () => {
  let component: CreateTherapistComponent;
  let fixture: ComponentFixture<CreateTherapistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTherapistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
