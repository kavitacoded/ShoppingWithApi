import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeProductContract } from './FakeProductContract';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private http :HttpClient) { }


  public getProducts():Observable<FakeProductContract[]>{
    return this.http.get<FakeProductContract[]>('https://fakestoreapi.com/products');
  }

  

}
