const apply = (ref, value) => {
  if (typeof ref === "object" && ref !== null) {
    ref.current = value;
  }
  if (typeof ref === "function") {
    ref(value);
  }
};

export const applyRefs = (...refs) => value => {
  refs.forEach(ref => apply(ref, value));
};

export default apply;
