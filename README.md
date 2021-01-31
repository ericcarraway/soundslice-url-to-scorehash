# soundslice-url-to-scorehash

Given a Soundslice URL, return the slice's scorehash. This is a unique identifier with a maximum size of 6 characters.

### 1. Installation

https://www.npmjs.com/package/@percuss.io/soundslice-url-to-scorehash

```shell
$ npm install @percuss.io/soundslice-url-to-scorehash
```

### 2. Usage

```javascript
const soundsliceUrlToScorehash = require('@percuss.io/soundslice-url-to-scorehash');

const scorehash = soundsliceUrlToScorehash('https://www.soundslice.com/slices/C1FVc/');

console.log(scorehash);
// C1FVc
```
