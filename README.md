# Simple CSS3 animation demo when items become visible into browser viewport

*By Dennis Burger, sept. 2013*

Based on a **Creativebloq.com** tutorial [**Getting CSS animations to trigger at the right time**](http://www.creativebloq.com/css3/getting-css-animations-trigger-1132906) (jan. 17, 2013)

### Prerequisite

* [Modernizr](http://modernizr.com/)
* [jQuery](http://jquery.com/)
* [jQuery Appear](http://plugins.jquery.com/appear/) (plugin, modified version by **Karl Schellenberg** for 3magine.com, see their version of [jquery.appear-1.1.1.modified.js](http://www.3magine.com/wp-content/themes/3magine/js/jquery.appear-1.1.1.modified.js))

#### Note regarding Sass
The CSS in this demo is compiled by Sass. But you don't actually need Sass to play around with this demo.

## What it does

Scroll down the `index.html` page, when a certain (top) **percentage of element** `#blocks` comes into the **browser viewport**, jQuery Appear (plugin) removes CSS classname `.animateBegin` from the HTML.

**Then CSS automatically starts to animate the CSS properties.**

## jQuery Appear

Using the **modified** jQuery Appear plugin (and some custom Javascript) the **animation delay** is set on  **all it's child elements** (inline vendor prefixed). This gives a nice animation delay, per child item, and prevents these child items from animating all at once. Now they **animate sequentually**.

## Browser support

Using Modernizr **browser feature dectection** (and jQuery), the `animations.css` file is only loaded if the web browser supports CSS animation. This nicely utilizes **progressive-enhancement**!

### Tested and working in cross platform modern (desktop & mobile) web browsers

* **Firefox** (desktop Mac / Windows / Android)
* **Chrome** (desktop Mac / Windows, iOS & Android)
* **Opera** (desktop Mac / Windows)
* **Safari** (iOS)
* **'Internet'** web browser (the default browser on Android)
* **Win/IE 10+** (desktop Windows)

### Fallback

**Win/IE9 and lower don't support CSS animations.**

If the browser doesn't support CSS animation (like desktop Win/IE9 and below) the `animations.css` is **not loaded**. The Modernizr jQuery Appear plugin check **skips the whole setup** part of the CSS animation. 

The web page is **displayed normally** without al the CSS fancy animations.