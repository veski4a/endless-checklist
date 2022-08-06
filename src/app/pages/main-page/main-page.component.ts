import { Component, OnInit } from '@angular/core';
import { ChecklistModel } from '../../models/checklist-model';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public model: ChecklistModel = {
    id: '1',
    title: 'Подготовка за началото на стаж',
    description: 'Кратко описание...',
    items: [
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
        value:
          'Настройване на daily reminder за feedback от страна на менторите',
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
    ],
  };

  constructor() {}

  ngOnInit() {}
}
