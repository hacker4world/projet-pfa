import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private readonly serverUrl = 'http://localhost:4000/notifications';

  constructor(private readonly httpClient: HttpClient) {}

  public fetchNotifications(token: string, reference: string) {
    const headers = new HttpHeaders({
      Authorization: token,
      'Content-Type': 'application/json',
    });

    return this.httpClient.get(this.serverUrl + '/notifications/' + reference, {
      headers,
    });
  }
}
