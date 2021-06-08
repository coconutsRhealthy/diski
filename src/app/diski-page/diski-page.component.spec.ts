import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskiPageComponent } from './diski-page.component';

describe('DiskiPageComponent', () => {
  let component: DiskiPageComponent;
  let fixture: ComponentFixture<DiskiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiskiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
