import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerMenuLeftComponent } from './drawer-menu-left.component';

describe('DrawerMenuLeftComponent', () => {
  let component: DrawerMenuLeftComponent;
  let fixture: ComponentFixture<DrawerMenuLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerMenuLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerMenuLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
