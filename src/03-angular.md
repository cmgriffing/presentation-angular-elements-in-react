## Angular Elements (component)

```javascript
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

```

<div class="notes">
You dont have to care too much about everything in here.

- @Inputs are the props we are passing in.

- @Outputs are the events that the WebComponent will emit.

Our WolfComponent takes in a name and avatar image url.

It will emit a revealed event that we have bound to to a click handler.
</div>

## Angular Elements (exporting)

```javascript
export class AppModule {

  constructor(private injector: Injector) {
    const wolfElement = createCustomElement(WolfComponent, {injector});
    window.customElements.define('ng-wolf', wolfElement);
  }

  // required because we are not bootstrapping into a dom element
  ngDoBootstrap() {}
}
```

<div class="notes">
The important part here is the `createCustomElement` function.

It takes our Angular Component and turns it into a legitimate WebComponent.

Then we pass that into the global customElementsRegistry and assign it a tag. This step doesn't necessarily have to happen here. It can happen anywhere that you have access to the constructor.

(we have to do that anyway for our hack later to get the component "reactifed")
</div>

---
