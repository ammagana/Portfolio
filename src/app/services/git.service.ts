import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get<any>(`https://api.github.com/users/ammagana`)
  }

  getRepos(){
    return this.http.get<any>(`https://api.github.com/users/ammagana/repos`)
  }

}
