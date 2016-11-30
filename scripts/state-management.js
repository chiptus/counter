function createState(curState = {}) {
  const defState = {
    counter: 0,
    name: "Name",
    increaseCounter,
    changeName,
  };
  const state = Object.assign(defState, curState);

  function increaseCounter() {
    state.counter++;
    if (state.onCounterChange) {
      state.onCounterChange(state.counter);
    }
  }

  function changeName(name){
    state.name = name;
    if (state.onNameChange) {
      state.onNameChange(name);
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