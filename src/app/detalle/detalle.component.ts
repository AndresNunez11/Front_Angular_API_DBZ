import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  personaje: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private productosService: ProductosService) {

    const id: any = activatedRoute.snapshot.paramMap.get("id");
    console.log("ID", id);
    const producto = this.getProducto(id);
  }

  async getProducto(id: string) {
    this.personaje = await this.productosService.getById(id)
      .subscribe((data: any) => {
        this.personaje = data;
        console.log("Personaje", this.personaje);
      });
  }

 

}
