import {Component, Input} from '@angular/core';
import {BusinessCardOptions} from "./business-card-options.model";
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'business-card',
  styles: [`
.business-card-wrapper {
    text-align: center;
    max-width: 100%;
    border: 1px solid #A6B2B6;
    border-radius: 2px;
}
.business-card-avatar {
    height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.5);
}
.business-card-name {
    font-size: 10px
}
.business-card-header {
    height: 80px;
}
.business-card-avatar-wrapper {
    position: relative;
    top: -50px;
    margin-bottom: -50px;
}
.business-card-name {
    font-size: 24px;
    margin-bottom: 5px;
}
.business-card-description {
    overflow: hidden;
    font-size: 12px;
    line-height: 20px;
    color: #737373;
    text-overflow: ellipsis;
}
.business-card-bottom-space {
    height: 20px;
}
`],
  template: `
<div class="business-card-wrapper" [style.background]="backgroundColor">
  <div class="business-card-header" [style]="headerColor">
  </div>
  <div class="business-card-avatar-wrapper">
    <img [src]="options.avatar"
         class="business-card-avatar"
         alt="Avatar">
  </div>
  <div class="business-card-info">
    <div class="business-card-name">
      {{options.name}}
    </div>
    <div class="business-card-descriptions">
      <div class="business-card-description" *ngFor="let description of options.descriptions">
        {{description}}
      </div>
    </div>
    <div class="business-card-bottom-space">
    </div>
  </div>
</div>
`
})
export class SampleComponent {

  constructor(private sanitizer: DomSanitizer) {
  }

  public get backgroundColor () {
    return this.options.backgroundColor || '#F4F6F6';
  };

  get headerColor() {
    let defaultHeaderColor = '#0069FF';
    let basicStyle = `linear-gradient(left top, ${this.options.headerColor}, ${this.options.headerColorTwo})`;
    return this.options.headerColorTwo && this.options.headerColor ? this.sanitizer.bypassSecurityTrustStyle(`
      background: -o-${basicStyle};
      background: -moz-${basicStyle};
      background: -webkit-${basicStyle};
    `) : `background: ${this.options.headerColor || defaultHeaderColor}`;
  }

  @Input()
  options: BusinessCardOptions;

}
