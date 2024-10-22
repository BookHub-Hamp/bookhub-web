import { Component } from '@angular/core';
import { NavbarHomeComponent } from '../../../shared/components/navbar-home/navbar-home.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';


@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [NavbarHomeComponent, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
