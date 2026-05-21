import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
  name: string;
  mobile: string;
  jobTitle: string;
  email: string;
  company: string;
  companySize: string;
  country: string;
  service?: string;
  comments?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = 'http://localhost:8000/api/contact';

  constructor(private http: HttpClient) {}

  submit(payload: ContactPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.apiUrl, payload);
  }
}
