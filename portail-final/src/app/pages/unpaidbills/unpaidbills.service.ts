import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnpaidBillsService {
  private readonly serverUrl = 'http://localhost:4000/unpaid-bills';

  public constructor(private readonly httpClient: HttpClient) {}

  public fetchUnpaidBills(token: string, reference: string) {
    const headers = new HttpHeaders({
      Authorization: token,
      'Content-Type': 'application/json',
    });

    return this.httpClient.get(this.serverUrl + '/bills/' + reference, {
      headers,
    });
  }
}
