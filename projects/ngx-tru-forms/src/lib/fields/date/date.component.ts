import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [ngClass]="['jf-label', schema.key, (isRequired() ? 'required' : '')]">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <input
      class="form-control"
      [name]="schema.key"
      [formControl]="control"
      [placeholder]="placeholder()"
      [bsConfig]="{ containerClass: 'theme-default', dateInputFormat: 'MM/DD/YYYY' }"
      bsDatepicker
    />
    <jf-error [control]="control"></jf-error>
  `
})
export class DateComponent extends CommonComponent {}
