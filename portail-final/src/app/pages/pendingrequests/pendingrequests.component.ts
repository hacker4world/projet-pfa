import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { PendingRequestsService } from './pendingRequests.service';
import { PendingRequest } from './pendingRequest.dto';

@Component({
  selector: 'app-pendingrequests',
  standalone: true,
  imports: [SidenavComponent, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './pendingrequests.component.html',
  styleUrl: './pendingrequests.component.css',
})
export class PendingrequestsComponent implements OnInit {


  public pendingRequests: PendingRequest[] = [];

  constructor(private readonly router: Router, private readonly pendingRequestsService: PendingRequestsService) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    let reference = localStorage.getItem('reference');

    if (!reference) return alert('Please select a reference');
    if (!token) this.router.navigate(["./login"]);
    else {
      this.pendingRequestsService.fetchPendingRequests(token, reference).subscribe((data: any) => {
        this.pendingRequests = data.pendingRequests;
      })
    }
  }
}
