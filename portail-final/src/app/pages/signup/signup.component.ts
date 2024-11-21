import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { SignupData } from './signup.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {}

  public signupData: SignupData = {
    name: '',
    email: '',
    adress: '',
    phone: '',
    cin: '',
    password: '',
  };

  public showWarning: boolean = false;
  public errorMessage: string = '';

  public onSignup(form: NgForm): void {
    this.showWarning = false;
    if (!this.authenticationService.verifyFormFields(this.signupData)) {
      this.errorMessage = 'Please fill all fields';
      this.showWarning = true;
    } else
      this.authenticationService.signup(this.signupData).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/login'], {
            queryParams: { afterSignup: 1 },
          });
        },
        ({ error }) => {
          this.showWarning = true;
          this.errorMessage = error.message;
        }
      );
  }
}
