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
  changeCounterText(state.counter);
  changeCounterTitle(state.name);
  onClick(".content", () => {
    state.increaseCounter();
  });
  onDblClick("#counter-title", () => {
    show('#counter-title-edit');
    hide('#counter-title');
    q('#counter-title-edit').focus();
  });
  onEnter('#counter-title-edit', () => {
    const name = q('#counter-title-edit').value;
    state.changeName(name);
    hide('#counter-title-edit');
    show('#counter-title');
    q('#counter-title-edit').blur();
  });
});

function changeCounterText(c) {
  changeText('#counter', c);
}

function changeCounterTitle(title) {
  changeText('#counter-title', title);
  q('#counter-title-edit').value = title;
}




