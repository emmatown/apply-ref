# apply-ref

> Apply React refs

## Install

```bash
yarn add apply-ref
```

## Usage

```jsx
import applyRef from 'apply-ref'

let ref1 = (val) => {}

let ref2 = React.createRef()


<div ref={(val) => {
    applyRef(ref1, val)
    applyRef(ref1, val)
}}>

```
