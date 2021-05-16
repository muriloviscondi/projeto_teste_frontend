import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  RequestCreate,
  ResponseCreate,
  ResponsePerson,
  ResponsePersons,
  RequestUpdate,
  ResponseUpdate,
} from './person.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private url = 'https://localhost:5001/Person/';

  constructor(private http: HttpClient) {}

  getPersons(): Observable<ResponsePersons> {
    const _url = `${this.url}/All`;

    return this.http.get<ResponsePersons>(_url);
  }

  getPerson(id: string): Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`;

    return this.http.get<ResponseUpdate>(_url);
  }

  createPerson(request: RequestCreate): Observable<ResponseCreate> {
    const _url = `${this.url}/Create`;

    return this.http.post<ResponseCreate>(_url, request);
  }

  updatePerson(id: string, request: RequestUpdate): Observable<RequestUpdate> {
    const _url = `${this.url}/${id}`;

    return this.http.put<RequestUpdate>(_url, request);
  }

  deletePerson(id: string): Observable<any> {
    const _url = `${this.url}/${id}`;

    return this.http.delete<any>(_url);
  }
}
