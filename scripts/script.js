const state = createState((count) => {
  changeCounterText(count);
});

onDocumentReady(() => {
  changeCounterText(state.counter);
  changeCounterTitle(state.nameOfCounter);
  onClick(".content", () => {
    state.increaseCounter();
  });
});

function changeCounterText(c) {
  changeText('#counter',c);
}

function changeCounterTitle(title) {
  changeText('#counter-title', title);
}



