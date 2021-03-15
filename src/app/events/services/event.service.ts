import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  URL = "http://localhost:3000/events";
  regEventURL = "http://localhost:3000/registerevent";
  /* eventRegisterURL = "" */

  constructor(private http: HttpClient) { }

  getEventList(): Observable<any> {
    return this.http.get(this.URL);
  }

  addEvent(data) {
    return this.http.post(this.URL, data);
  }

  registersEvent(data) {
    return this.http.post(this.regEventURL,data);
  }

  getRegEventList() {
    /* console.log("getRegEventList works fine"); */
    return this.http.get(this.regEventURL);
  }


}
