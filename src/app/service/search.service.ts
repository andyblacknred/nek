import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private router: Router) { }

  // declare variables
  public request: any;
  public response: {};

  // search request to https://jsonplaceholder.typicode.com/posts and navigate to search-page to show results
  search(request) {
    this.request = request;
    let url = `https://jsonplaceholder.typicode.com/posts`;
    if (request > 0 && request < 11) {
      url = `https://jsonplaceholder.typicode.com/posts?userId=${request}`
    }
    this.http.get(url).subscribe(response => {
      this.response = response;
      console.log(this.response);
      this.router.navigate(['/search']);
    })
  }
}
