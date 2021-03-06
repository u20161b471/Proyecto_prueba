import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private readonly http: HttpClient) { }

  getCategorias(){
    return this.http.get('https://localhost:44309/api/categoria/getcategorias')
  }
}
