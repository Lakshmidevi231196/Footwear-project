import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensfootwearComponent } from './mensfootwear.component';

describe('MensfootwearComponent', () => {
  let component: MensfootwearComponent;
  let fixture: ComponentFixture<MensfootwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensfootwearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensfootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
