import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint: string= 'assets/json/mainMenu.json'; //aqui va la URL de la API

@Injectable({
  providedIn: 'root'
})
export class MainhnavbarMenuService {

  constructor(private http: HttpClient) { }

  getItemsHnavbar(){
    return this.http.get(endPoint);
  }
}
