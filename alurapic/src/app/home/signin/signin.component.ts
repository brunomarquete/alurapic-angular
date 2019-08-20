import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formGroup : FormGroup;

  @ViewChild('inputUserName') inputUserName : ElementRef<HTMLInputElement>

  constructor(private formBuilder : FormBuilder,
              private authService: AuthService,
              private router: Router,
              private platformDetectorService : PlatformDetectorService) { }

  login() {

    const userName = this.formGroup.get('userName').value;
    const password = this.formGroup.get('password').value;

    this.authService.authenticate(userName, password).subscribe(
       () => this.router.navigate(['user', userName]),
       err => {
         console.log(err);
         if (this.platformDetectorService.isPlatformBrowser()) {
          this.inputUserName.nativeElement.focus();
         }
         this.formGroup.reset();
       }
    );

  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
       'userName' : ['', Validators.required],
       'password' : ['', Validators.required]
    })
  }

}
