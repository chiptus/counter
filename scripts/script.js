const state = getStateFromStorage();

state.onCountChange = (count) => {
  changeCounterText(count);
  saveStateToStorage(state);
};

state.onNameChange = (name) => {
  changeCounterTitle(name);
  saveStateToStorage(state);
}

state.onCounterChange = (counter) => {
  changeCounterText(counter.count);
  changeCounterTitle(counter.name);
  saveStateToStorage(state);
}

onDocumentReady(() => {
  fillCounter(state.currentCounter);
  fillCountersList(state.counters);
  setClickingOnCounter();
  setChangingCounter();
  setTitleEditing();
  setSocialSharing();
});



