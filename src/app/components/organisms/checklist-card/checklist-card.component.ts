import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import {
  CheckListItemModel,
  ChecklistModel,
} from '../../../models/checklist-model';

@Component({
  selector: 'checklist-card',
  templateUrl: './checklist-card.component.html',
  styleUrls: ['./checklist-card.component.css'],
})
export class ChecklistCardComponent implements OnInit {
  @Input() model: ChecklistModel;

  constructor() {}

  ngOnInit() {}

  public get progressBarValue(): number {
    const checkedOffItems = this.model.items.filter(
      (element) => element.checkedOff == true
    );

    const maxValue: number = this.model.items.length;
    const currentValue: number = (checkedOffItems.length / maxValue) * 100;

    return Math.round(currentValue);
  }

  addTask(taskName: string): void {
    this.model.items.push({
      value: taskName,
      id: '999',
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.model.items, event.previousIndex, event.currentIndex);
  }
}
