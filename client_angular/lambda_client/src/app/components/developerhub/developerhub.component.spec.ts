import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperhubComponent } from './developerhub.component';

describe('DeveloperhubComponent', () => {
  let component: DeveloperhubComponent;
  let fixture: ComponentFixture<DeveloperhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperhubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
