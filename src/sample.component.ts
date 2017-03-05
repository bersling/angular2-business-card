import {Component, Input} from '@angular/core';
import {BusinessCardOptions} from "./business-card-options.model";

@Component({
  selector: 'business-card',
  template: `
<div class="business-card-wrapper">
  <div class="business-card-header"></div>
  <div class="business-card-avatar">
    <img [src]="options.avatar"
         alt="Avatar">
  </div>
  <div class="business-card-info">
    <div class="business-card-name">
      {{name}}
    </div>
  </div>
</div>
`
})
export class SampleComponent {

  constructor() {
  }

  @Input()
  name: string;

  @Input()
  options: BusinessCardOptions;

}
