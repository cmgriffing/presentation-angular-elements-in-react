## Making A Basic WebComponent

```javascript
class Countdown extends HTMLElement {
  connectedCallback() {
    const template = `
      <button class="countdown-start">Start the countdown</button>
      <span class="seconds-left"></span>
      `;
    this.innerHTML = template;

    // Useful references
    this.button = this.querySelector('.countdown-start');
    this.secondsDisplay = this.querySelector('.seconds-left');

    // Initialize
    this.button.addEventListener('click', () => this.handleClick());
  }

  handleClick() {
      if(this.hasAttribute('seconds')) {
        this.seconds = +this.getAttribute('seconds');
      } else {
        this.seconds = 10;
      }
      this.updateTimer();
      this.button.disabled = true;
      this.button.innerHTML = 'YOU DID IT';
      this.updateTimer();
      const counter = window.setInterval(() => {
        this.seconds--;
        this.updateTimer();
        if (this.seconds === 0) {
          window.clearInterval(counter);
          console.info('BOOM');
          this.dispatchEvent(new Event('boom'));
        }
      }, 1000);
  }

  updateTimer() {
      this.secondsDisplay.innerHTML = this.seconds;
  }

}

```

<div class="notes">
There are two important parts to notice first.

The first is the "input" which we get by using `this.getAttribute`.

The second is the event we dispatch. Consumers can then just attach an event listener and they can react to our component.
</div>


## Lifecycle Callbacks

- connectedCallback => componentDidMount

- disconnectedCallback => componentWillUnmount

- attributeChangedCallback => componentDidUpdate

- adoptedCallback => `¯\_(ツ)_/¯`

[https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks)

<div class="notes">

- connectedCallback: Invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.

- disconnectedCallback: Invoked each time the custom element is disconnected from the document's DOM.

- adoptedCallback: Invoked each time the custom element is moved to a new document.

- attributeChangedCallback: Invoked each time one of the custom element's attributes is added, removed, or changed.
</div>

## Using A Basic Web Component

```html
<!-- Add it to the DOM -->
<countdown-timer seconds=20></countdown-timer>

<script>
  // Define the element on the global CustomElementRegistry
  window.customElements.define('countdown-timer', Countdown);

  // Listening to the output event
  document.querySelector('countdown-timer')
    .addEventListener('boom', function(event) {
      console.log('BOOM');
    });
</script>
```

<div class="notes">

</div>

---
