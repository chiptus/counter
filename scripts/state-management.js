function createState(onCounterChange = null) {
  const state = {
    counter: 0,
    nameOfCounter: "Name",
    increaseCounter,
    onCounterChange,
  }

  function increaseCounter() {
    state.counter++;
    if (state.onCounterChange) {
      state.onCounterChange(state.counter);
    }
  }

  return state;
}