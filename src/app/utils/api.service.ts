import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { API_ERROR } from './api-error.const';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  route(path: string) {
    return environment.apiBaseURL + '/' + path;
  }

  error(code: number) {
    return API_ERROR.get(code);
  }

}
