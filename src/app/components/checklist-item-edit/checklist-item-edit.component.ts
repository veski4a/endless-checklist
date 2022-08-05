import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'checklist-item-edit',
  templateUrl: './checklist-item-edit.component.html',
  styleUrls: ['./checklist-item-edit.component.css'],
})
/**
 * Component representing the checklist item in edit mode
 */
export class ChecklistItemEditComponent implements OnInit {
  // Task's name
  @Input() task: string = '';
  // Whether the task name input box should be auto resized based on the text's length
  public taskNameInputAutoResize: boolean = true;

  // Callback when the user clicks save
  @Output() onSave = new EventEmitter<string>();
  // Callback when the user cancels out of the edit
  @Output() onCancel = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /**
   * Called when the user clicks the save button
   */
  public save(): void {
    this.onSave.emit(this.task);
    this.task = '';
  }

  /**
   * Called when the user clicks the cancel button
   */
  public cancel(): void {
    this.onCancel.emit();
  }

  /**
   * Getter controlling the save button's disabled property
   */
  public get isSaveDisabled(): boolean {
    return this.task.length == 0;
  }
}
