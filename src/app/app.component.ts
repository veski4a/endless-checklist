import { Component, HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private utilitiesService: UtilitiesService) {}

  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    this.utilitiesService.documentClickedTarget.next(event.target);
  }
}

@Injectable({ providedIn: 'root' })
export class UtilitiesService {
  documentClickedTarget: Subject<HTMLElement> = new Subject<HTMLElement>();
}
