import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { UnpaidBillsService } from './unpaidbills.service';
import { CommonModule } from '@angular/common';
import { UnpaidBill } from './UnpaidBill.dto';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-unpaidbills',
  standalone: true,
  imports: [SidenavComponent, HttpClientModule, CommonModule, RouterModule],
  templateUrl: './unpaidbills.component.html',
  styleUrl: './unpaidbills.component.css',
})
export class UnpaidbillsComponent implements OnInit {
  public unpaidBills: UnpaidBill[] = [];

  constructor(private readonly unpaidBillsService: UnpaidBillsService, private readonly router: Router) {}

  ngOnInit(): void {
    let reference = localStorage.getItem('reference');
    if (!reference) return alert('Please select a reference');
    let token = localStorage.getItem('token');
    if (!token) this.router.navigate(["./login"])
    else {
      this.unpaidBillsService
        .fetchUnpaidBills(token, reference)
        .subscribe((data: any) => {
          this.unpaidBills = data.unpaidBills;
          console.log(data);
        });
    }
  }
}
