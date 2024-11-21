import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { Subscription } from 'rxjs';
import { SubscriptionService } from './subscription.service';
import { CommonModule } from '@angular/common';
import { SubscriptionData } from './Subscription.interface';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [RouterModule, SidenavComponent, CommonModule, FormsModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css',
})
export class SubscriptionComponent implements OnInit {
  public subscriptions: SubscriptionData[] = [];

  public shownSubscriptions: SubscriptionData[] = [];

  public reference: string = '';

  public showReferenceError: boolean = false;

  public stats = {
    unpaidBills: 0,
    notifications: 0,
    pendingRequests: 0,
    rejectedRequests: 0,
  };

  constructor(private readonly subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    let token: string = localStorage.getItem('token')!;
    let reference: string = localStorage.getItem('reference')!;
    this.subscriptionService.fetchAllSubscriptions(token).subscribe((data) => {
      data.subscriptions.forEach((sub: SubscriptionData) => {
        this.subscriptions.push(sub);
      });

      console.log(this.subscriptions);
    });
  }

  public onReferenceChange() {
    localStorage.setItem('reference', this.reference);
    this.showReferenceError = false;
    this.shownSubscriptions = [];
    this.subscriptions.forEach((sub) => {
      if (sub.reference == this.reference) this.shownSubscriptions.push(sub);
    });

    if (this.shownSubscriptions.length == 0) this.showReferenceError = true;

    let token: string = localStorage.getItem('token')!;
    let reference: string = localStorage.getItem('reference')!;

    this.subscriptionService.fetchStats(token, reference).subscribe((data) => {
      console.log(data);

      this.stats.notifications = data.notifications;
      this.stats.unpaidBills = data.unpaidBills;
      this.stats.pendingRequests = data.pendingRequests;
      this.stats.rejectedRequests = data.rejectedRequests;
    });
  }

  public deleteSubscription(reference: string) {
    this.subscriptions = this.subscriptions.filter(
      (s) => s.reference != reference
    );
    this.shownSubscriptions = this.shownSubscriptions.filter(
      (s) => s.reference != reference
    );

    let token: string = localStorage.getItem('token')!;
    this.subscriptionService
      .deleteSubscription(reference, token)
      .subscribe((data) => {
        alert('deleted');
      });
  }
}
