import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VentureService } from 'src/app/shared/services/venture.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-accountform',
  templateUrl: './accountform.page.html',
  styleUrls: ['./accountform.page.scss'],
})
export class AccountformPage implements OnInit {
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
      password: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phoneNo: [null, [Validators.required]]
    });
   }

  ngOnInit() {
  }
  get form() { return this.loginForm.controls; }


  createAccount(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }
}
