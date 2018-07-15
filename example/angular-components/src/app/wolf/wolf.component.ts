import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-wolf',
  template: `
    <p (click)="reveal($event)">
      wolf
    </p>
  `,
  styles: [`

  `],
  encapsulation: ViewEncapsulation.Native
})
export class WolfComponent implements OnInit {

  @Input()
  name: string;

  @Output()
  revealed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  reveal(event) {
    this.revealed.emit(`You found me. I am ${this.name} the WolfComponent.`);
  }

}
