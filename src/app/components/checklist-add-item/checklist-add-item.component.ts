import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'checklist-add-item',
  templateUrl: './checklist-add-item.component.html',
  styleUrls: ['./checklist-add-item.component.css'],
})
/**
 * A component for adding a task in a checklist
 */
export class ChecklistAddItemComponent implements OnInit {
  // Callback when the user adds a task
  @Output() onAdd = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  /**
   * Called when the user adds a task
   */
  addTask(taskName: string): void {
    this.onAdd.emit(taskName);
  }
}
