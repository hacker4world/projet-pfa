import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { UnpaidbillsComponent } from './pages/unpaidbills/unpaidbills.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { PendingrequestsComponent } from './pages/pendingrequests/pendingrequests.component';
import { RejectedrequestsComponent } from './pages/rejectedrequests/rejectedrequests.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: 'subscription', component: SubscriptionComponent },
  {
    path: 'unpaid-bills',
    component: UnpaidbillsComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'pending-requests',
    component: PendingrequestsComponent,
  },
  {
    path: 'rejected-requests',
    component: RejectedrequestsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
];
