# Boilerplate React SASS Storybook

Boilerplate project fro React SASS and Storybook.

**NOTE** This boilerplate is not a required patter, just a thing to get people going.

Components are setup using the [Atomic Design Principles](http://bradfrost.com/blog/post/atomic-web-design/) with an example `<Button/>` component done for you with an example test.

## SASS and CSS

- `npm run watch:sass` will compile all your `.scss` files from the `main.scss` file and create a `styles.css` file. This is just compiled, and not optimised.
- `npm run build:css` will compile, prefix, and compress into the `style.css` file.

The structure of the `./src/sass/` folder is a variation of the [7-1](https://sass-guidelin.es/#the-7-1-pattern) pattern with slight variations to cater for [Atomic Design Principles](http://bradfrost.com/blog/post/atomic-web-design/). The `.scss` files should be written in the [BEM](http://getbem.com/naming/) pattern preferably, but that is up to the developers on the project.

## Storybook

- `npm run storybook` will get the storybook going on port `9009`

The structure of the storybook is the same as that of the component folder and of the sass/component folder. The aforementioned button is included here as an example.

Uses Storybook 4 (currently in a rc-1 release cycle) and should probs be updated when a stable release becomes avaliable. This had to be used as this was bootstraped with the latest version of [CRA](https://github.com/facebook/create-react-app) which uses Webpack 4, and that broke Storybook v3.

<hr/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
