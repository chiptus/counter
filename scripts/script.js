const state = getStateFromStorage();

state.onCounterChange = (count) => {
  changeCounterText(count);
  saveStateToStorage(state);
};

state.onNameChange = (name) => {
  changeCounterTitle(name);
  saveStateToStorage(state);
}

onDocumentReady(() => {
  fillCounter(state);
  setClickingOnCounter();
  setTitleEditing();
  setSocialSharing();
});



