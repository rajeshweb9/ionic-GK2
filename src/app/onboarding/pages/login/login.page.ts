import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VentureService } from 'src/app/shared/services/venture.service';
import { LoginService } from 'src/app/shared/services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  errorMsg = '';
  constructor(
    private ventureService: VentureService,
    private activatedRouterServices: ActivatedRoute,
    public routerServices: Router,
    private fb: FormBuilder,
    private loginServices: LoginService, 
  ) { 
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit() {}

  get form() { return this.loginForm.controls; }

  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }
}
