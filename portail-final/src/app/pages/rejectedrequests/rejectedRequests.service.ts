import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RejectedRequestsService {
  private readonly serverUrl = 'http://localhost:4000/rejected-requests';

  constructor(private readonly httpClient: HttpClient) {}

  public fetchRejectedRequests(token: string, reference: string) {
    const headers = new HttpHeaders({
      Authorization: token,
      'Content-Type': 'application/json',
    });

    return this.httpClient.get(this.serverUrl + '/all/' + reference, {
      headers,
    });
  }
}
