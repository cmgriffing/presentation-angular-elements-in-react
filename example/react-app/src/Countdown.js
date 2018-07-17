
import reactify from 'skatejs-react-integration';

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
    console.log('this.seconds', this.seconds);
      if(!this.seconds) {
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
        }
      }, 1000);
  }

  updateTimer() {
      this.secondsDisplay.innerHTML = this.seconds;
  }

}

window.customElements.define('countdown-timer', Countdown);
export default Countdown = reactify(Countdown);
