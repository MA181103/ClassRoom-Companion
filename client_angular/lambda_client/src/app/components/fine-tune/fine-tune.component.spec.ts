import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineTuneComponent } from './fine-tune.component';

describe('FineTuneComponent', () => {
  let component: FineTuneComponent;
  let fixture: ComponentFixture<FineTuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineTuneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineTuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
