import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) {

   }

   /*getAll(){

    return this.http.get('https://dragonball-api.com/api/characters');
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod");
   }*/

getAll(page: number = 1, limit: number = 10): Observable<any> {
  return this.http.get(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`);
}

getAllpages(page: number = 1, limit: number = 10): Observable<any> {
  return this.http.get(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`);
}

   getById(id:string){
    
    return this.http.get(`https://dragonball-api.com/api/characters/${id}`);
    //return this.http.get("https://fakestoreapi.com/products/"+id);

   }
}
