import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email!: string ;
  password!: string;

  onSubmit(){
    if(this.email && this.password) {
      console.log(this.email);
      console.log(this.password);
     console.log('Inicio de sesión exitoso');
    }
  }

}
