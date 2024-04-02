import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Afspraak } from './afspraak.model';

@Injectable({
  providedIn: 'root'
})
export class AfspraakService {

  apiBaseUrl: string = "https://localhost:7035/api/Afspraak";
  afspraakList: Afspraak[] = [];

  constructor(private http:HttpClient){

  }

  getAfspraken(){
    this.http.get(this.apiBaseUrl)
    .subscribe({
      next: res => {
        this.afspraakList = res as Afspraak[];
      },
      error: err => {console.log(err)}
    })
  }
  
}
