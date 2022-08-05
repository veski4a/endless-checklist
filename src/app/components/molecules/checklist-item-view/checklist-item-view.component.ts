import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Interface describing an item in a checklist
 */
export interface CheckListItemModel {
  // Item id
  id: string;
  // Item value
  value: string;
  // Wheter the items is checked or not
  checkedOff?: boolean;
  // Group that the item belongs to
  group?: string;
}

@Component({
  selector: 'checklist-item-view',
  templateUrl: './checklist-item-view.component.html',
  styleUrls: ['./checklist-item-view.component.css'],
})
export class ChecklistItemViewComponent implements OnInit {
  // Checkbox model
  @Input() model: CheckListItemModel;
  // Handler for selecting the checkbox or to monitor the value change
  @Input() selected: any;
  @Output() selectedChange = new EventEmitter();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
