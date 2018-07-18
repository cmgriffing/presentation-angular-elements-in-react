import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-wolf',
  template: `
    <img [src]="avatar" (click)="reveal($event)" alt="Wolf" />
  `,
  styles: [`
    img {
      max-width: 100%;
      height: auto;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class WolfComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  avatar: string;

  @Output()
  revealed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  reveal(event) {
    this.revealed.emit(`You found me. I am ${this.name} the WolfComponent.`);
  }

}
