import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar-author',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './navbar-author.component.html',
  styleUrl: './navbar-author.component.css'
})
export class NavbarAuthorComponent {
  logout():void{

  }
}
