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

function changeText(selector, text) {
  document.querySelector(selector).textContent = text;
}

//state factory

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

//events functions

function documentIsReady() {
  return (document.readyState === 'complete');
}

function onDocumentReady(callback = function () { }) {
  document.addEventListener('readystatechange', (e) => {
    if (documentIsReady()) {
      callback(e);
    }
  });
}

function onClick(selector = "body", callback = function () { }) {
  document.querySelector(selector).addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    callback(e);
  });
}
