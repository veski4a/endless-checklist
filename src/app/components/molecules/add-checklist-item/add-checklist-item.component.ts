import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-checklist-item',
  templateUrl: './add-checklist-item.component.html',
  styleUrls: ['./add-checklist-item.component.css'],
})
/**
 * A component for adding a task in a checklist
 */
export class AddChecklistItemComponent implements OnInit {
  // Callback when the user adds a task
  @Output() onAdd = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  /**
   * Called when the user confirms
   */
  save(taskName: string): void {
    this.onAdd.emit(taskName);
  }
}
