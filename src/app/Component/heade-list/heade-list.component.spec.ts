import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadeListComponent } from './heade-list.component';

describe('HeadeListComponent', () => {
  let component: HeadeListComponent;
  let fixture: ComponentFixture<HeadeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
