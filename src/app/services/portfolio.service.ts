import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  dataDb = './../../assets/db.json';

  constructor(private http: HttpClient) {}

  getDataDB() {
    return this.http.get<Project[]>(this.dataDb);
  }
}
