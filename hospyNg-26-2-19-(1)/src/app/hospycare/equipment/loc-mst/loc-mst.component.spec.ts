import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocMstComponent } from './loc-mst.component';

describe('LocMstComponent', () => {
  let component: LocMstComponent;
  let fixture: ComponentFixture<LocMstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocMstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocMstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
