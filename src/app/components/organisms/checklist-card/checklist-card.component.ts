import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { CheckListItemModel } from '../../molecules/checklist-item-view/checklist-item-view.component';

@Component({
  selector: 'checklist-card',
  templateUrl: './checklist-card.component.html',
  styleUrls: ['./checklist-card.component.css'],
})
export class ChecklistCardComponent implements OnInit {
  categories: CheckListItemModel[] = [
    {
      id: '1',
      value: 'Избиране на места за стажантите и разпределение по местата',
    },
    { value: 'Избиране на ментори които ще вземат участие', id: '2' },
    { value: 'Разпределяне на стажантите по ментори', id: '3' },
    {
      value:
        'Уведомяване на всички Team Leaders за участието на съответните ментори в предстоящата стажантска програма',
      id: '4',
    },
    { value: 'Осигуряване на лаптоп ако някой няма', id: '5' },
    { value: 'Добавяне на нов проект в Team Foundation Server', id: '6' },
    { value: 'Нов Google Classroom', id: '7' },
    { value: 'Добавяне на всички участници в стажа в Teams', id: '8' },
    {
      value: 'Настройване на daily reminder за feedback от страна на менторите',
      id: '9',
    },
    {
      value:
        'Настройване на weekly reminder за въвеждане на PBI-та за отчитане на ангажимента',
      id: '10',
    },
    { value: 'Добавяне на папка в Drive с всички нужни файлове', id: '11' },
    {
      value: 'Попълване на ангажираните лица в стажа в съответната таблица',
      id: '12',
    },
  ];

  constructor() {}

  ngOnInit() {
    // this.selectedCategories = this.categories.slice(1, 3);
  }

  public get progressBarValue(): number {
    const checkedOffItems = this.categories.filter(
      (element) => element.checkedOff == true
    );

    const maxValue: number = this.categories.length;
    const currentValue: number = (checkedOffItems.length / maxValue) * 100;

    return Math.round(currentValue);
  }

  addTask(taskName: string): void {
    this.categories.push({
      value: taskName,
      id: '999',
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
  }
}
