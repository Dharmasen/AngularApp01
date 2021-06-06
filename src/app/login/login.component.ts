import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch} from '../shared/must-match.validator';
import { Router, ActivatedRoute } from '@angular/router'; 
import { HttpClient  } from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router, 
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
   
          name: ['', Validators.required],
          mobileNumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]          
      }, {
         validator: MustMatch('password', 'confirmPassword')
      });
  }

  get form() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }else{
        alert('Registration success. \n\n' + JSON.stringify(this.registerForm.value, null, 4));
        this.saveRegistrationForm();        
        this.router.navigate(['userlist']);
      }
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

  saveRegistrationForm(){
      const url = 'http://jsonplaceholder.typicode.com/registration'
      
      return this.http.post(url, this.registerForm.value)
        .subscribe(
          (resp) => {
            console.log(resp);
          }
        );
  }
}
