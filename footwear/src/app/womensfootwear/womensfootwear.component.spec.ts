import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensfootwearComponent } from './womensfootwear.component';

describe('WomensfootwearComponent', () => {
  let component: WomensfootwearComponent;
  let fixture: ComponentFixture<WomensfootwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensfootwearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensfootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
