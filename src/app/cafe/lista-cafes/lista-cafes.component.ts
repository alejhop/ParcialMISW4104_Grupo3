import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-lista-cafes',
  templateUrl: './lista-cafes.component.html',
  styleUrls: ['./lista-cafes.component.css'],
})
export class ListaCafesComponent implements OnInit {
  cafes: Cafe[] = [];
  error = false;

  constructor(private readonly cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe({
      next: (cafes) => {
        this.cafes = cafes;
        this.error = false;
      },
      error: () => {
        this.error = true;
      },
    });
  }

  get origenCount(): number {
    return this.cafes.filter((cafe) => cafe.tipo.toLowerCase().includes('origen')).length;
  }

  get blendCount(): number {
    return this.cafes.filter((cafe) => cafe.tipo.toLowerCase().includes('blend')).length;
  }
}
