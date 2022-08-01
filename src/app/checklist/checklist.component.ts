import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
export class ChecklistComponent implements OnInit {
  selectedCategories: any[];

  categories: any[] = [
    {
      name: 'Избиране на места за стажантите и разпределение по местата',
      key: '1',
    },
    { name: 'Избиране на ментори които ще вземат участие', key: '2' },
    { name: 'Разпределяне на стажантите по ментори', key: '3' },
    {
      name: 'Уведомяване на всички Team Leaders за участието на съответните ментори в предстоящата стажантска програма',
      key: '4',
    },
    { name: 'Осигуряване на лаптоп ако някой няма', key: '5' },
    { name: 'Добавяне на нов проект в Team Foundation Server', key: '6' },
    { name: 'Нов Google Classroom', key: '7' },
    { name: 'Добавяне на всички участници в стажа в Teams', key: '8' },
    {
      name: 'Настройване на daily reminder за feedback от страна на менторите',
      key: '9',
    },
    {
      name: 'Настройване на weekly reminder за въвеждане на PBI-та за отчитане на ангажимента',
      key: '10',
    },
    { name: 'Добавяне на папка в Drive с всички нужни файлове', key: '11' },
    {
      name: 'Попълване на ангажираните лица в стажа в съответната таблица',
      key: '12',
    },
  ];

  constructor() {}

  ngOnInit() {
    // this.selectedCategories = this.categories.slice(1, 3);
  }
}
