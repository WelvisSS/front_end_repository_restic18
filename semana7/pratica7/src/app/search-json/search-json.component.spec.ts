import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJsonComponent } from './search-json.component';

describe('SearchJsonComponent', () => {
  let component: SearchJsonComponent;
  let fixture: ComponentFixture<SearchJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
