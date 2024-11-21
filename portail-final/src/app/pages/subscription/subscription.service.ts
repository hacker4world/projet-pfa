import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionData } from './Subscription.interface';

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  private serevrUrl = 'http://localhost:4000/subscription';

  constructor(private readonly httpClient: HttpClient) {}

  public fetchAllSubscriptions(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: token,
      'Content-Type': 'application/json',
    });

    return this.httpClient.get(this.serevrUrl + '/subscriptions', { headers });
  }

  public fetchStats(token: string, reference: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: token,
      'Content-Type': 'application/json',
    });
    return this.httpClient.get(this.serevrUrl + '/stats/' + reference, {
      headers,
    });
  }

  public deleteSubscription(reference: string, token: string) {
    const headers = new HttpHeaders({
      Authorization: token,
      'Content-Type': 'application/json',
    });

    return this.httpClient.delete(this.serevrUrl + '/delete/' + reference, {
      headers,
    });
  }
}
