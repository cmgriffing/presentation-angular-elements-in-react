# Angular Elements In React

#

![](assets/wolf-in-sheeps-clothing.jpg)

---

## What - Web Components

- Custom Elements

- Shadow DOM

- HTML imports

- HTML Template

<div class="notes">

The Custom Elements specification lays the foundation for designing and using new types of DOM elements.

The rest are not as important for what I will be talking about today.
</div>

## What - Angular Elements

> Angular elements are Angular components packaged as custom elements, a web standard for defining new HTML elements in a framework-agnostic way.

- [https://angular.io/guide/elements](https://angular.io/guide/elements)

---

## Why - Portability

- Migrating Older projects
- Organization-wide component library

<div class="notes">

- Older projects can use something like Angular Elements to wrap their components as web components. (Angular Elements may not be the specific solution, this is just an easy example.)

- Then you can rewrite the underlying application or components completely independent of each other as long as the continue to expose the same inputs and outputs.

- What if you are a large company with many apps that you want to keep stylistically in sync. Now you can write your components in one framework, export to web components, and then consume them across your organization. Updating the branding across multiple apps becomes a simple dependency version update as long as the "contract" of inputs and outputs is respected via semver.

</div>

---
