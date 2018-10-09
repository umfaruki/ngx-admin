import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '../../custom-material-module';

import { PaymentUploadComponent } from './payment-upload/payment-upload.component';
import { PaymentListComponent } from './payment-list/payment-list.component';

import { FileInputComponent } from '../../@core/components/file-input/file-input.component';
import { DndDirective } from '../../@core/components/file-input/dnd.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
  ],
  declarations: [
    PaymentUploadComponent,
    PaymentListComponent,
    FileInputComponent,
    DndDirective
  ]
})
export class PaymentModule { }