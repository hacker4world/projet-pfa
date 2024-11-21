import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ProfileData } from './ProfileData.dto';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SidenavComponent, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  public updateForm = {
    currentPassword: '',
    password: '',
  };

  public profileData?: ProfileData;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['./login']);
    } else {
      const headers = new HttpHeaders({
        Authorization: token,
        'Content-Type': 'application/json',
      });

      this.httpClient
        .get('http://localhost:4000/profile/details', { headers })
        .subscribe((data: any) => {
          this.profileData = data.profile;
        });
    }
  }

  public updateProfile() {
    const token = localStorage.getItem('token')!;

    const headers = new HttpHeaders({
      Authorization: token,
      'Content-Type': 'application/json',
    });

    this.httpClient
      .put('http://localhost:4000/profile/update', this.updateForm, { headers })
      .subscribe(
        (data) => {
          console.log('password modified');
        },
        (error) => {
          console.log(error);
          alert('error');
        }
      );
  }
}
