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
    const _window = (<any>window);
    _window.myElements = {
      meta: {
        tags: [],
        namesByTag: {}
      },
      elements: {}
    };

    const wolfElement = createCustomElement(WolfComponent, {injector});
    _window.customElements.define('ng-wolf', wolfElement);

    _window.myElements.meta.tags.push('ng-wolf');
    _window.myElements.meta.namesByTag['ng-wolf'] = 'Wolf';

    _window.myElements.elements['ng-wolf'] = wolfElement;
  }

  ngDoBootstrap() {}
}
