import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AutoFocus } from '../core-kit/directives/auto-focus.directive';
import { InplaceModule } from '../core-kit/templates/inplace/inplace';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistItemComponent } from './components/organisms/checklist-item/checklist-item.component';
import { AddChecklistItemComponent } from './components/organisms/add-checklist-item/add-checklist-item.component';
import { ChecklistItemEditComponent } from './components/organisms/checklist-item-edit/checklist-item-edit.component';
import { ChecklistItemViewComponent } from './components/organisms/checklist-item-view/checklist-item-view.component';

import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

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
    ChecklistItemViewComponent,
    AddChecklistItemComponent,
    ChecklistComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
