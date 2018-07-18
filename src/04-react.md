## Consuming a Web Component in React

## Polyfill

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-loader.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/custom-elements-es5-adapter.js"></script>
```

<div class="notes">
You can include these into your build process however you like, but they are essential right now. (only 2kb)


</div>

## Reactify

```javascript
export const MyReactComponent = reactify(MyWebComponent);
```

---
