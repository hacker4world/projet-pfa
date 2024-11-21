import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RejectedRequest } from './RejectedRequest.dto';
import { Router, RouterModule } from '@angular/router';
import { RejectedRequestsService } from './rejectedRequests.service';

@Component({
  selector: 'app-rejectedrequests',
  standalone: true,
  imports: [SidenavComponent, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './rejectedrequests.component.html',
  styleUrl: './rejectedrequests.component.css',
})
export class RejectedrequestsComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly rejectedRequestsService: RejectedRequestsService
  ) {}

  public rejectedRequests: RejectedRequest[] = [];

  ngOnInit(): void {
    let reference = localStorage.getItem('reference');
    if (!reference) return alert('Please select a reference');
    let token = localStorage.getItem('token');
    if (!token) this.router.navigate(['./login']);
    else {
      this.rejectedRequestsService
        .fetchRejectedRequests(token, reference)
        .subscribe((data: any) => {
          this.rejectedRequests = data.rejectedRequests;
        });
    }
  }
}
