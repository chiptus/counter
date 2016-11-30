function createState(curState = {}) {
  const defState = {
    counter: 0,
    nameOfCounter: "Name",
    increaseCounter,
    onCounterChange: (count) => {
      changeCounterText(count);
      saveStateToStorage(state);
    },
  };
  const state = Object.assign(defState, curState);

  function increaseCounter() {
    state.counter++;
    if (state.onCounterChange) {
      state.onCounterChange(state.counter);
    }
  }

  return state;
}

function getStateFromStorage() {
  const stateString = localStorage.getItem("state");
  let state = stateString ? JSON.parse(stateString) : {};
  saveStateToStorage(state);
  return createState(state);
}

function saveStateToStorage(state = {}) {
  localStorage.setItem("state", JSON.stringify(state));
}