import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VentureService {

  constructor(private http: HttpClient) { }



  getVentureList() {
    return this.http.get(environment.apiUrl + '/ventureList.php');
  }
}
