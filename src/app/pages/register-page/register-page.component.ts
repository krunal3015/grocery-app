import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  cities = ['Delhi', 'Mumbai', 'Pune'];

  // userModel = new User('Krunal', 'krunal@gmail.com', '1234567890', 'admin', 'Mumbai', 'Male', true);

  userModel = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitHandler(){
     this.authService.register(this.userModel).subscribe(data => {
      console.log(data)
     })
  }

}
