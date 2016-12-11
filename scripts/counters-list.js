function setCountersList() {
  fillCountersList(state.counters);
  setChangingCounter();
  setClickingOnAddCounter();
  setClickingOnRemoveCounter();
}

function setChangingCounter() {
  q(SELECTORS.COUNTERS_LIST_SELECT).addEventListener("change", () => {
    const counterId = q(SELECTORS.COUNTERS_LIST_SELECT).value;
    state.changeCurrentCounter(+counterId);
  });
}

function setClickingOnAddCounter() {
  onClick(SELECTORS.ADD_COUNTERS_BTN, () => {
    const counter = buildCounter("new counter", 0);
    state.addCounter(counter);
  });
}

function fillCountersList(counters) {
  const html = counters.map(c => (`
    <option value="${c.id}">${c.name}</option>
  `)).join("");
  q(SELECTORS.COUNTERS_LIST_SELECT).innerHTML = html;
}

function setClickingOnRemoveCounter() {
  onClick(SELECTORS.REMOVE_COUNTER_BTN, () => {
    state.removeCounter(state.currentCounter.id);
  });
}