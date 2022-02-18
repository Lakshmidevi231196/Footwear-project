import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsfootwearComponent } from './kidsfootwear.component';

describe('KidsfootwearComponent', () => {
  let component: KidsfootwearComponent;
  let fixture: ComponentFixture<KidsfootwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsfootwearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsfootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
