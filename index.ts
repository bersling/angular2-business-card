import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusinessCardComponent} from './src/business-card.component';

export * from './src/business-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BusinessCardComponent
  ],
  exports: [
    BusinessCardComponent
  ]
})
export class BusinessCardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BusinessCardModule
    };
  }
}
