import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KandleChartComponent } from './kandle-chart.component';

describe('KandleChartComponent', () => {
  let component: KandleChartComponent;
  let fixture: ComponentFixture<KandleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KandleChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KandleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
