import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  misProductos: any[] = [];
  currentPage = 1;
  totalPages = 1;
  itemsPerPage = 10;
  loading = false;

  constructor(private productosService: ProductosService) {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number): void {
    if (this.loading || (this.totalPages && page > this.totalPages)) return;

    this.loading = true;

    this.productosService.getAll(page, this.itemsPerPage)
      .subscribe((data: any) => {
        this.misProductos.push(...data.items); // ← agrega sin reemplazar
        this.currentPage = data.meta.currentPage;
        this.totalPages = data.meta.totalPages;
        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }

  loadMore(): void {
    this.loadPage(this.currentPage + 1);
  }

  hasMore(): boolean {
    return this.currentPage < this.totalPages;
  }
}

