import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

// import { AppComponent } from './app.component';
import { WolfComponent } from './wolf/wolf.component';

@NgModule({
  declarations: [
    WolfComponent
  ],
  entryComponents: [
    WolfComponent
  ],
  imports: [
    BrowserModule
  ],
})
export class AppModule {

  constructor(private injector: Injector) {
    const wolfElement = createCustomElement(WolfComponent, {injector});
    window.customElements.define('ng-wolf', wolfElement);
  }

  ngDoBootstrap() {}
}

