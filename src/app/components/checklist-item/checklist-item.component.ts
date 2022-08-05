import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckListItemModel } from '../molecules/checklist-item-view/checklist-item-view.component';

@Component({
  selector: 'checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.css'],
})
export class ChecklistItemComponent {
  // Checkbox model
  @Input() model: CheckListItemModel;
  // Callback when the user edits the task
  // @Output() onTaskSave = new EventEmitter<string>();

  /**
   * Called when the user adds a task
   */
  saveTask(taskName: string): void {
    this.model.value = taskName;
  }
}
