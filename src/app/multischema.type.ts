import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-multi-schema-type',
  template: `
    <div class="card mb-3">
      <div class="card-body">
        <legend *ngIf="props.label">{{ props.label }}</legend>
        <p *ngIf="props.description">{{ props.description }}</p>
        <div class="alert alert-danger" role="alert" *ngIf="showError && formControl.errors">
          <formly-validation-message [field]="field"></formly-validation-message>
        </div>
        <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
      </div>
    </div>
  `,
})
export class MultiSchemaTypeComponent extends FieldType {}


/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */