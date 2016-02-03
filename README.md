# SVG sprites example

##Usage example

```html
<style type="text/css">
  .icon {
    width: 50px;
    height: 50px;
  }
  .user-icon {
    fill: red;
  }
  .group-icon {
    fill: blue;
  }
</style>


<svg class="icon user-icon"><use xlink:href="#user" /></svg>
<svg class="icon group-icon"><use xlink:href="#group" /></svg>
```

##Gulp

1. `npm run gulp-sprites`
2. copy `svg-sprites/symbol/svg/sprite.symbol.svg` source to index.html `<!-- Sprite paste start -->` section

##Grunt

1. `npm run grunt-sprites`
2. copy `svg-sprites/symbol/svg/sprite.symbol.svg` source to index.html and replace `<!-- Sprite paste start --> / end` section
