# readingTime.js
Script showing the reading time of the articles to the user (showing them as seconds, minutes, hours, days)

**[View the Demo on CodePen &rarr;]()**

## Getting Started

Compiled and production-ready code can be found in the `dist` directory.

### 1. Include readingTime.js on your site.

**Direct Download**

You can [download the files directly from GitHub]().

```html
<script src="dist/readingTime.min.js"></script>
```

**CDN**

You can also use the [jsDelivr CDN](https://cdn.jsdelivr.net/gh/cferdinandi/bouncer/dist/). I recommend linking to a specific version number or version range to prevent major updates from breaking your site.

```html
<script src="https://unpkg.com/aks-reading-time@1.0.0/dist/readingTime.min.js"></script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/aks-reading-time@1.0.0/dist/readingTime.min.js"></script>
```

**NPM**

You can also use NPM (or your favorite package manager).

```bash
npm i aks-reading-time
```


### 2. Initialize reading-time.js.

```html
<div class="blog-content">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus diam at nibh varius, a condimentum ante tristique. Integer ut tempor metus. Etiam fringilla auctor sapien ut fermentum.</p>
  <p>Fusce porttitor sit amet nisi eu tincidunt. Donec volutpat nunc in tempor mollis. Donec vehicula dignissim nisl, eget porta purus vestibulum vel.</p>
  <p>...</p>
</div>
<div class="result"></div>
```

```js
const BlogReadingTime = new readingTime({
  read: ".blog-content", // text container in which reading speed will be measured
  result: ".result", // html element showing results
  speed: 1 // the number of words read per second
});
```

### Options and Settings

```js
const BlogReadingTime = new readingTime({
  read: ".blog-content",
  result: ".result",
  speed: 1,
  // other options
  secondText: 'Sec Read', // default value "Sec Read"
  minuteText: 'Sec Read', // default value "Min Read"
  hourText: 'Sec Read', // default value "Hour Read"
  dayText: 'Sec Read', // default value "Day Read"
});
```

## License

The code is available under the [MIT License](https://github.com/Ahmetaksungur/reading-time/blob/master/LICENSE).
