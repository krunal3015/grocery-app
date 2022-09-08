import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  // loginForm = new FormGroup({
  //   email: new FormControl('Mark'),
  //   password: new FormControl('123456')
  // })

  loginForm = this.fb.group({
    email:[null, [Validators.required, Validators.email]],
    password:[null, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
  })


  ngOnInit(): void {
  }


  onSubmitHandler(){
    // console.log(this.loginForm.value)

    this.authService.login(this.loginForm.valid).subscribe(response => {
      console.log(response)
    })

  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

}
