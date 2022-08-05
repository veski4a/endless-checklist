import { Component, Input } from '@angular/core';
import { CheckListItemModel } from '../checklist-item-view/checklist-item-view.component';

@Component({
  selector: 'checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.css'],
})
export class ChecklistItemComponent {
  // Checkbox model
  @Input() model: CheckListItemModel;

  /**
   * Called when the user adds a task
   */
  saveTask(taskName: string): void {
    this.model.value = taskName;
  }
}
