import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from './email-input/email-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@agency-x/angular-material';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule],
  exports:[EmailInputComponent],
  declarations: [EmailInputComponent]
})
export class EmailInputModule {}
