import { Ref } from "react";

const apply = <T>(ref: Ref<T>, value: T) => {
  if (typeof ref === "object" && ref !== null) {
    // @ts-ignore
    ref.current = value;
  }
  if (typeof ref === "function") {
    ref(value);
  }
};

export const applyRefs = <T>(...refs: Ref<T>[]) => (value: T) => {
  refs.forEach(ref => apply(ref, value));
};

export default apply;
