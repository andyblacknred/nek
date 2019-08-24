import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private router: Router) { }

  public request: any;
  public response: {};

  search(request) {
    this.request = request;
    if (request > 0 && request < 11) {
      this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${request}`).subscribe(response => {
        this.response = response;
        console.log(request);
        console.log(this.response);
        this.router.navigate(['/search'])
      })
    } else {
      this.http.get(`https://jsonplaceholder.typicode.com/posts`).subscribe(response => {
        this.response = response;
        console.log(request);
        console.log(this.response);
        this.router.navigate(['/search'])
      })
    }
  }
}
