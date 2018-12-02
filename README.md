# snowfall.js

### What is snowfall.js

This is a small pure-javascript plugin, which has no dependencies.
It can therefore be used completely on it's own, without the need for other libraries.

You can use it on a single site-wide container, or on smaller containers, such as image-containers, if you prefer.

The plugin will randomly generate snowflakes based on a number of aspects.  
You can set settings when initializing the plugin, or just use the default settings. More on that in the "How to use" section.

### Example

Snowfall on an image:

![alt text](https://gunnyarts.github.io/snowfall.js/example/example.gif "snowfall.js on an image")

### How to use
Add the following files to your header:

```html
<link rel="stylesheet" href="../link-to/snowfall.min.css">
<script src="../link-to/snowfall.min.js"></script>
```
[Link to repository](https://github.com/Gunnyarts/snowfall.js)

At the bottom of your page, add a `<script>` element with the init function below.

```javascript
snowDrop.init({
  bindto: '#container', // the CSS selector of the container element
  class: 'snowflake',  	// main class for all snowflakes - default: "snowflake" - this handles animation, so change with caution.
  frequency: 100,       // create new snowdrop every X ms - default: 100
  layers: 3,            // amount of layers giving depth to the snow - default: 3, min: 1
  duration: 5000,       // time for the front layer of drops to hit the floor in ms - default 5000
  wind: 100             // pixels each snowflake moves to the right as it falls - default: 50
})
```
You only need the `bindto: container` attribute to run the plugin, so this would also work just fine:
```javascript
snowDrop.init({bindto: '#container'})
```
>You can use snowfall.js on both `id` and `class` selectors

Your container must have the following styling in order to function correctly:
```css
#container {
  position: relative;
  overflow: hidden;    
}
```
> You can also use `position: absolute`  
>  `overflow: hidden` ensures that there are no unwanted scrollbars on the element from the snowflakes