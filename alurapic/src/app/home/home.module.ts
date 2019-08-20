import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule} from '@angular/forms'
import { MessageModule } from '../shared/components/message/message.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageModule,
    RouterModule
  ]
})
export class HomeModule { }
