import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAuthComponent } from './auth/auth.component';
import { LayoutAppComponent } from './app/app.component';
import { LayoutModule } from '../components/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

const COMPONENTS = [LayoutAuthComponent, LayoutAppComponent];

@NgModule({
  imports: [SharedModule, LayoutModule, FormsModule, ReactiveFormsModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutsModule {}
