import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AutoFocus } from '../core-kit/directives/auto-focus.directive';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistItemComponent } from './components/checklist-item/checklist-item.component';
import { ChecklistItemEditComponent } from './components/checklist-item-edit/checklist-item-edit.component';

import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InplaceModule } from 'primeng/inplace';
import { ChecklistAddItemComponent } from './components/checklist-add-item/checklist-add-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    CardModule,
    ProgressBarModule,
    InputTextModule,
    InputTextareaModule,
    InplaceModule,
  ],
  declarations: [
    AppComponent,
    AutoFocus,
    ChecklistItemComponent,
    ChecklistItemEditComponent,
    ChecklistAddItemComponent,
    ChecklistComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
