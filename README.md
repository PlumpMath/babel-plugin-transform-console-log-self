# babel-plugin-transform-console-log-self

Makes console.log calls print their arguments in textual form.

Example

```js
const a = 11, b = 22, c = 33, d = 44
console.log(a, b, c + d)
```

prints `11 22 77`. The plugin replaces the `console.log` above with 

```js
console.log("a", a, "b", b, "c + d", c + d)
```

which prints the much more informative `a 11 b 22 c + d 77` 


## Installation

```bash
npm install babel-plugin-transform-console-log-self
```

## Usage

### Via `.babelrc` (Recommended)

```js
{
  "plugins": ["transform-console-log-self"]
}
```

### Via CLI

```sh
babel --plugins transform-console-log-self script.js
```

### Via Node API

```js
require('babel').transform('code', {
	plugins: ['transform-console-log-self']
})
```


