import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  exports: [BsDropdownModule]
})
export class AppBootstrapModule {}