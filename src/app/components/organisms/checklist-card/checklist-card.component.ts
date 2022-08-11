import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { changeOrderInArray } from '../../../../core-kit/drag-utils';
import { ChecklistModel } from '../../../models/checklist-model';

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
    const maxOrderValue = Math.max(...this.model.items.map((o) => o.order));

    this.model.items.push({
      value: taskName,
      id: '999',
      order: maxOrderValue + 1,
    });
  }

  editTask(taskName: string): void {
    if (taskName.length == 0) {
    } else {
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    changeOrderInArray(
      this.model.items,
      event.previousIndex,
      event.currentIndex
    );
  }
}
