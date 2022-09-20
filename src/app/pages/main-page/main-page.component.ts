import { Component, OnInit } from '@angular/core';
import { ChecklistModel } from '../../models/checklist-model';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public checklists: Array<ChecklistModel>;

  constructor() {
    let item1: ChecklistModel = new ChecklistModel();
    item1.id = '1';
    item1.title = 'Подготовка за началото на стаж';
    item1.description = 'Кратко описание...';
    item1.items = [
      {
        id: '1',
        order: 1,
        value: 'Избиране на места за стажантите и разпределение по местата',
      },
      {
        value: 'Избиране на ментори които ще вземат участие',
        id: '2',
        order: 2,
      },
      { value: 'Разпределяне на стажантите по ментори', id: '3', order: 3 },
      {
        value:
          'Уведомяване на всички Team Leaders за участието на съответните ментори в предстоящата стажантска програма',
        id: '4',
        order: 4,
      },
      { value: 'Осигуряване на лаптоп ако някой няма', id: '5', order: 5 },
      {
        value: 'Добавяне на нов проект в Team Foundation Server',
        id: '6',
        order: 6,
      },
      { value: 'Нов Google Classroom', id: '7', order: 7 },
      {
        value: 'Добавяне на всички участници в стажа в Teams',
        id: '8',
        order: 8,
      },
      {
        value:
          'Настройване на daily reminder за feedback от страна на менторите',
        id: '9',
        order: 9,
      },
      {
        value:
          'Настройване на weekly reminder за въвеждане на PBI-та за отчитане на ангажимента',
        id: '10',
        order: 10,
      },
      {
        value: 'Добавяне на папка в Drive с всички нужни файлове',
        id: '11',
        order: 11,
      },
      {
        value: 'Попълване на ангажираните лица в стажа в съответната таблица',
        id: '12',
        order: 12,
      },
    ];

    let item2: ChecklistModel = new ChecklistModel();
    item2.id = '2';
    item2.title = 'Преди тръгване';
    item2.description = '';
    item2.items = [
      {
        id: '1',
        order: 1,
        value: 'Спри контакта на пералнята',
      },
      {
        id: '2',
        order: 2,
        value: 'Спри печката и аспиратора',
      },
      {
        id: '3',
        order: 3,
        value: 'Спри бойлера',
      },
      {
        id: '4',
        order: 4,
        value: 'Поливане на цветята',
      },
      {
        id: '5',
        order: 5,
        value: 'Спри водата',
      },
      {
        id: '6',
        order: 6,
        value: 'Заключване на вратата',
      },
      {
        id: '7',
        order: 7,
        value: 'Пускане на СОТ',
      },
    ];

    this.checklists.push(item2);
  }

  ngOnInit() {}
}
