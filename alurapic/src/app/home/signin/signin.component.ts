import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formGroup : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
       'userName' : ['', Validators.required],
       'password' : ['', Validators.required]
    })
  }

}
