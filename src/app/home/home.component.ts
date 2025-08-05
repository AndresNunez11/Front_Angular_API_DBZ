import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  misProductos: any[] = [];
  currentPage = 1;
  totalPages = 1;
  itemsPerPage = 10;

  constructor(private productosService: ProductosService) {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number): void {
    this.productosService.getAll(page, this.itemsPerPage)
      .subscribe((data: any) => {
        this.misProductos = data.items;
        this.currentPage = data.meta.currentPage;
        this.totalPages = data.meta.totalPages;
      });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadPage(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.loadPage(this.currentPage - 1);
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadPage(page);
    }
  }
}