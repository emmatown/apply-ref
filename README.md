# apply-ref

> Apply React refs

## Install

```bash
yarn add apply-ref
```

## Usage

```jsx
import applyRef, { applyRefs } from 'apply-ref'

let ref1 = val => {/*...*/}
let ref2 = React.createRef()

<div ref={applyRefs(ref1, ref2)} />

// OR

<div ref={(val) => {
  applyRef(ref1, val)
  applyRef(ref2, val)
  someOtherHandler(val)
}} />
```
