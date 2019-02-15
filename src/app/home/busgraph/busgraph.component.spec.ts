import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusgraphComponent } from './busgraph.component';

describe('BusgraphComponent', () => {
  let component: BusgraphComponent;
  let fixture: ComponentFixture<BusgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
