import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ChecklistComponent } from './checklist/checklist.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CheckboxModule],
  declarations: [AppComponent, ChecklistComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
