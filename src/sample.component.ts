import {Component, Input} from '@angular/core';
import {BusinessCardOptions} from "./business-card-options.model";

@Component({
  selector: 'business-card',
  styles: [`.business-card-avatar {height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.5);
}
.business-card-name {font-size: 10px}
.business-card-header {
    height: 80px;
    background: green;
}
.business-card-avatar-wrapper {
    position: relative;
    top: -50px;
    margin-bottom: -50px;
}
.business-card-wrapper {
    text-align: center;
}
.business-card-name {
    font-size: 24px;
}
`],
  template: `
<div class="business-card-wrapper">
  <div class="business-card-header"></div>
  <div class="business-card-avatar-wrapper">
    <img [src]="options.avatar"
         class="business-card-avatar"
         alt="Avatar">
  </div>
  <div class="business-card-info">
    <div class="business-card-name">
      {{options.name}}
    </div>
  </div>
</div>
`
})
export class SampleComponent {

  constructor() {
  }

  @Input()
  options: BusinessCardOptions;

}
