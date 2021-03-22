# code-fabric

A collection of configuration files containing prettier, eslint, stylelint

## Install

```bash
npm install code-fabric --save-dev
# or
yarn add code-fabric --dev
```

## Use

in `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('code-fabric/eslint')],
  rules: {},
};
```

in `.prettierrc.js`

```js
const prettier = require('code-fabric/prettier');

module.exports = {
  ...prettier,
};
```

in `.stylelintrc.js`

```js
module.exports = {
  extends: [require.resolve('code-fabric/stylelint')],
  rules: {},
};
```

in ESM

```js
import { eslint, prettier, stylelint } from 'code-fabric';
// you can use this config
```
