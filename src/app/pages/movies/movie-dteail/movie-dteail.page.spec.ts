import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDteailPage } from './movie-dteail.page';

describe('MovieDteailPage', () => {
  let component: MovieDteailPage;
  let fixture: ComponentFixture<MovieDteailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDteailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDteailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
