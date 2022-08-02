import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'checklist-item-edit',
  templateUrl: './checklist-item-edit.component.html',
  styleUrls: ['./checklist-item-edit.component.css'],
})
export class ChecklistItemEditComponent implements OnInit {
  public taskName: string = '';
  public autoResize: boolean = true;

  @Output() onAddNewTask = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public get isAddButtonDisabled(): boolean {
    return this.taskName.length == 0;
  }

  public add(): void {
    this.onAddNewTask.emit(this.taskName);
    this.taskName = '';
  }

  public cancel(): void {
    this.onCancel.emit();
  }
}
