# digit-flip

[![CircleCI](https://circleci.com/gh/sishenhei7/digit-flip.svg?style=shield)](https://circleci.com/gh/sishenhei7/digit-flip)

> to display digit flipping effect(or rolling effect) 数字滚动效果、数字翻转效果、数字翻动效果

(初衷：数字滚动的库有很多，但是 PM 说希望在数字里面加一个千分位逗号，其它库并没有这个功能，所以我自己写了一个~)

[demo](https://sishenhei7.github.io/digit-flip/)

## Getting Started

### install

To begin with, just install ym-drawer:

```
npm i digit-flip -s
```

then，install it in ```main.js```:

```
Vue.use(DigitFlip)
```

### examples

You can use YmDrawerHorizontal as a vue component anywhere like this:

```
<digit-flip :value="num" />
```

For more usage, please look at [demo-source-code](https://github.com/sishenhei7/digit-flip/tree/master/demo)


