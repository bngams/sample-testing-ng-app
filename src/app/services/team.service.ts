import { Injectable } from '@angular/core';
import { ApiService } from '../utils/api.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private api: ApiService, private http: Http) { }

  getAll(): Promise<any> {
    return this.http.get(this.api.route('teams/')).toPromise()
      .then((response) => {
        // handle treatments and return
        return Promise.resolve(response.json());
      })
      .catch((err) => {
        // this.api.error(err.code)
        return Promise.reject(err);
      });
  }

  getAllObservable(): Observable<any> {
    return this.http.get(this.api.route('teams/'));
  }

  searchByCountry(key): Observable<any> {
    return this.http.get(this.api.route('teams?country_like=' + key));
  }

}
