import { Component } from '@angular/core';

@Component({
  selector: 'business-card',
  template: '<h1>{{title}}</h1>',
})
export class BusinessCardComponent {
  title = 'Minimal NgModule';
}