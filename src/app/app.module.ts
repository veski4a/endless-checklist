import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
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
    ChecklistItemComponent,
    ChecklistItemEditComponent,
    ChecklistComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
