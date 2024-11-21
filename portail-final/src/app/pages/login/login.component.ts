import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoginData } from './login.interface';
import { AuthenticationService } from '../signup/authentication.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public afterSignup: boolean = false;

  public loginData: LoginData = {
    email: '',
    password: '',
  };

  public showError: boolean = false;
  public errorMessage: string = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['afterSignup'] == '1') this.afterSignup = true;
      else this.afterSignup = false;
    });
  }

  public onLogin(form: NgForm): void {
    this.afterSignup = false;

    this.authenticationService.login(this.loginData).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/subscription']);
      },
      ({ error }) => {
        this.showError = true;
        this.errorMessage = error.message;
      }
    );
  }
}
