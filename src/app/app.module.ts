import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { AutoFocus } from '../core-kit/directives/auto-focus.directive';
import { InplaceModule } from '../core-kit/templates/inplace/inplace';

import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChecklistCardComponent } from './components/organisms/checklist-card/checklist-card.component';
import { ChecklistItemViewComponent } from './components/molecules/checklist-item-view/checklist-item-view.component';
import { AddChecklistItemComponent } from './components/molecules/add-checklist-item/add-checklist-item.component';
import { ChecklistItemEditComponent } from './components/molecules/checklist-item-edit/checklist-item-edit.component';
import { ChecklistItemComponent } from './components/molecules/checklist-item/checklist-item.component';

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
    DragDropModule,
  ],
  declarations: [
    AppComponent,
    AutoFocus,
    ChecklistCardComponent,
    ChecklistItemViewComponent,
    AddChecklistItemComponent,
    ChecklistItemEditComponent,
    ChecklistItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
