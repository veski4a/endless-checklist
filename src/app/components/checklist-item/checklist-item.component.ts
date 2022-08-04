import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Interface describing an item in a checklist
 */
export interface CheckListItemModel {
  // Item id
  id: string;
  // Item value
  value: string;
  // Group that the item belongs to
  group?: string;
  // Whether the checkbox is disabled
  disabled?: boolean;
}

@Component({
  selector: 'checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.css'],
})
export class ChecklistItemComponent {
  // Checkbox model
  @Input() model: CheckListItemModel;
  // Handler for selecting the checkbox or to monitor the value change
  @Input() selected: any;
  @Output() selectedChange = new EventEmitter();

  public checked: boolean = false;

  public valueChanged(newValue): void {
    this.selected = newValue;
    this.selectedChange.emit(newValue);
  }

  public onChange(event: any): void {
    // TODO: Това трябва да не работи по този начин, а да се преправи чекчето да е булево и по друг начин да се сетват маркираните в списъка
    const found = event.checked.find((element) => element == this.model.value);
    this.checked = found != null;
    console.log(this.checked);
  }
}
