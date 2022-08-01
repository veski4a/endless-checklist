import { Component, OnInit } from '@angular/core';
import { CheckListItemModel } from '../components/checklist-item/checklist-item.component';

@Component({
  selector: 'checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
export class ChecklistComponent implements OnInit {
  checklistItemData: CheckListItemModel = {
    id: '123',
    value: 'Test',
  };

  selectedCategories: any[];
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

  public get progressBarValue(): number {
    if (this.selectedCategories == null) return 0;

    const maxValue: number = this.categories.length;
    const currentValue: number =
      (this.selectedCategories.length / maxValue) * 100;

    return Math.round(currentValue);
  }

  constructor() {}

  ngOnInit() {
    // this.selectedCategories = this.categories.slice(1, 3);
  }
}
