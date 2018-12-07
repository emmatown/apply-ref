export default (ref, value) => {
  if (typeof ref === "object") {
    ref.current = value;
  }
  if (typeof ref === "function") {
    ref(value);
  }
};
