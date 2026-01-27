<p align="center">
  <img src="banner.svg" alt="vue-to-reactive" width="100%" />
</p>

<h1 align="center">vue-to-reactive</h1>

<p align="center">A Vue 3 composition API utility that converts a ref into a reactive proxy object, enabling direct property access without .value while maintaining full reactivity.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-to-reactive"><img src="https://img.shields.io/npm/v/vue-to-reactive.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-to-reactive"><img src="https://img.shields.io/npm/dm/vue-to-reactive.svg" alt="npm downloads" /></a>
  <a href="https://github.com/vuefrag/vue-to-reactive/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/vue-to-reactive.svg" alt="license" /></a>
</p>


## Installation

```bash
npm install vue-to-reactive
```

## Usage

```ts
import { toReactive } from 'vue-to-reactive';
```

Converts ref to reactive. Also made possible to create a "swapable" reactive object.

```ts
import { toReactive } from 'vue-to-reactive'
import { ref } from 'vue'

const refState = ref({ foo: 'bar' })

console.log(refState.value.foo) // => 'bar'

const state = toReactive(refState) // <--

console.log(state.foo) // => 'bar'

refState.value = { bar: 'foo' }

console.log(state.foo) // => undefined
console.log(state.bar) // => 'foo'
```

> Extracted from [VueUse](https://vueuse.org/) for standalone use.


## License

MIT
