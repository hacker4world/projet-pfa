import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { NotificationsService } from './notifications.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Notification } from './Notification.dto';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [SidenavComponent, CommonModule, RouterModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent implements OnInit {
  public notifications: Notification[] = [];

  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    let reference = localStorage.getItem('reference');
    let token = localStorage.getItem('token');
    if (!reference) return alert('Please select a reference');
    if (!token) this.router.navigate(['login']);
    else {
      this.notificationsService
        .fetchNotifications(token, reference)
        .subscribe((data: any) => {
          this.notifications = data.notifications;
          console.log(this.notifications);
        });
    }
  }
}
