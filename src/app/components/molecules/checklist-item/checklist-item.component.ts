import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckListItemModel } from '../../../models/checklist-model';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.css'],
})
export class ChecklistItemComponent {
  // Checkbox model
  @Input() model: CheckListItemModel;
  // Callback when the user edits a task
  @Output() onEdit = new EventEmitter();
  faCoffee = faGripVertical;

  /**
   * Called when the user edits a task
   */
  save(taskName: string): void {
    this.onEdit.emit({ id: this.model.id, value: taskName });
  }
}
