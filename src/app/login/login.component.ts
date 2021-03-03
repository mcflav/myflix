import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name;
  password;
  accessGranted = false;
  message;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onLoadGallery(nameInput: HTMLInputElement, passwordInput: HTMLInputElement){
    this.name = nameInput.value;
    this.password = passwordInput.value;
    if(this.name === "test1" && this.password === "1password"){
      this.router.navigate(['/gallery']);
      this.accessGranted = true;
    }else{
      this.message = "You entered an invalid username or password.";
    }
      
  }

}
