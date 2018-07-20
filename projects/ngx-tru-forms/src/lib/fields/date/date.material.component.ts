import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MomentDateAdapter} from '@angular/material-moment-adapter';

const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  template: `
    <mat-form-field>
      <input
        matInput
        [matDatepicker]='myDatepicker'
        [formControl]='control'
        [placeholder]='title()'
      >
      <mat-datepicker-toggle matSuffix [for]='myDatepicker'></mat-datepicker-toggle>
      <mat-datepicker #myDatepicker></mat-datepicker>
      <mat-error jf-error [control]='control'></mat-error>
    </mat-form-field>
  `,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    {
      provide:
      MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    },
  ],
})
export class DateMaterialComponent extends CommonComponent {}