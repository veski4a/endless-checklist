import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckListItemModel } from '../../../models/checklist-model';

@Component({
  selector: 'checklist-item-view',
  templateUrl: './checklist-item-view.component.html',
  styleUrls: ['./checklist-item-view.component.css'],
})
/**
 * Component representing the checklist item in presentation mode
 */
export class ChecklistItemViewComponent implements OnInit {
  // Checkbox item model
  @Input() model: CheckListItemModel;
  // Callback when the user clicks the checkbox
  @Output() onCheck = new EventEmitter<boolean>();
  // Callback when the user enter's edit mode
  @Output() onEdit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Called when the checkbox is clicked
   */
  public checkboxValueChange(newValue: boolean): void {
    this.onCheck.emit(newValue);
  }

  /**
   * Called when the label showing the task is clicked
   */
  public taskNameClick(): void {
    this.onEdit.emit();
  }
}
