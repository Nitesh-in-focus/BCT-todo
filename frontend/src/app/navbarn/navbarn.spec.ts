import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbarn } from './navbarn';

describe('Navbarn', () => {
  let component: Navbarn;
  let fixture: ComponentFixture<Navbarn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbarn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbarn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
