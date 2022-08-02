import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ChecklistComponent } from './checklist/checklist.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChecklistItemComponent } from './components/checklist-item/checklist-item.component';
import { ChecklistItemEditComponent } from './components/checklist-item-edit/checklist-item-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    CardModule,
    ProgressBarModule,
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
