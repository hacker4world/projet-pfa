import { Component } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {}
