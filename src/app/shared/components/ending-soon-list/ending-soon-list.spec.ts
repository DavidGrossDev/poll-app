import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingSoonList } from './ending-soon-list';

describe('EndingSoonList', () => {
  let component: EndingSoonList;
  let fixture: ComponentFixture<EndingSoonList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndingSoonList],
    }).compileComponents();

    fixture = TestBed.createComponent(EndingSoonList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
