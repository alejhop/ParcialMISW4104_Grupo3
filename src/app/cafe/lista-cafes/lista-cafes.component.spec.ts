import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';
import { ListaCafesComponent } from './lista-cafes.component';

describe('ListaCafesComponent', () => {
  let fixture: ComponentFixture<ListaCafesComponent>;

  const cafes = [
    new Cafe(1, 'Colombia', 'Café de Origen', 'Huila'),
    new Cafe(2, 'Mezcla Andina', 'Blend', 'Nariño'),
    new Cafe(3, 'Brasil', 'Café de Origen', 'Cerrado'),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCafesComponent],
      imports: [CommonModule],
      providers: [{ provide: CafeService, useValue: { getCafes: () => of(cafes) } }],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCafesComponent);
    fixture.detectChanges();
  });

  it('renders three coffee rows and the table header', () => {
    const table: HTMLTableElement = fixture.nativeElement.querySelector('table');
    expect(table.querySelectorAll('thead tr').length).toBe(1);
    expect(table.querySelectorAll('tbody tr').length).toBe(3);
    expect(table.querySelectorAll('thead th').length).toBe(4);
  });

  it('calculates the number of coffees by type', () => {
    expect(fixture.componentInstance.origenCount).toBe(2);
    expect(fixture.componentInstance.blendCount).toBe(1);
  });
});
