import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router'

import { LoginService } from 'src/app/services/login.service'
import { FormGroup, FormControl, Validators, FormBuilder,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  initemail:string;
  FORMLOGIN: FormGroup;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
  private router: Router,
  private fb: FormBuilder,
  private logins: LoginService
   ) { }

  ngOnInit(): void {
    this.initemail=localStorage.getItem('Rememberme');
    this.FORMLOGIN = this.fb.group({

      email: [this.initemail, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember:[this.initemail?true:false]
  });
  // this.auth.logout(); 




  }

  get f() { return this.FORMLOGIN.controls; }

  onSubmit(){
   
    this.submitted = true;


    if(this.FORMLOGIN.valid){
      console.log(this.FORMLOGIN);
      this.logins.Login( 
        this.FORMLOGIN.value.email,
        this.FORMLOGIN.value.password

        ).subscribe(data =>{

        localStorage.setItem('currentToken',data["token"]);
        localStorage.setItem('authIn', "true");
        this.router.navigate(['/dashboard'],{relativeTo :this.route})
         
     },
     err => {
       console.log(err['status'])
       if(err['status'] == '400'){
       }
       else if(err['status'] == '500'){
       }
     }
     
     )
    
      if( this.FORMLOGIN.value.remember==true || this.FORMLOGIN.value.remember=="True")
      {
        localStorage.setItem('Rememberme',this.FORMLOGIN.value.email );
      }
      else
      {
        localStorage.setItem('Rememberme',null);
        localStorage.removeItem('Rememberme');
      }
     
     
    }
    else{
      return this.FORMLOGIN.invalid;
    }
    
  }
}
