const state = getStateFromStorage();

state.onCountChange = (count) => {
  changeCounterText(count);
  saveStateToStorage(state);
};

state.onNameChange = (name) => {
  changeCounterTitle(name);
  fillCountersList(state.counters);
  saveStateToStorage(state);
}

state.onCounterChange = (counter) => {
  if (counter) {
    changeCounterText(counter.count);
    changeCounterTitle(counter.name);
  }
  fillCountersList(state.counters);
  saveStateToStorage(state);
}

onDocumentReady(() => {
  fillCounter(state.currentCounter);
  setClickingOnCounter();
  setClickingRestart();
  setCountersList();
  setTitleEditing();
  setSocialSharing();
});



