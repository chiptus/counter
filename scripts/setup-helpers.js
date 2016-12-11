function changeCounterText(c) {
  changeText(SELECTORS.COUNT, c);
}

function changeCounterTitle(title) {
  changeText(SELECTORS.COUNTER_TITLE, title);
  q(SELECTORS.COUNTER_TITLE_EDIT).value = title;
}

function fillCounter({count, name}) {
  changeCounterText(count);
  changeCounterTitle(name);
}

function fillCountersList(counters) {
  const html = counters.map(c =>  (`
    <option value="${c.id}">${c.name}</option>
  `)).join("");
  q(SELECTORS.COUNTERS_LIST_SELECT).innerHTML = html;
}

function setClickingOnCounter() {
  onClick(SELECTORS.COUNT, () => {
    state.increaseCounter();
  });
}

function setChangingCounter(){
  q(SELECTORS.COUNTERS_LIST_SELECT).addEventListener("change", () => {
    const counterId = q(SELECTORS.COUNTERS_LIST_SELECT).value;
    state.changeCurrentCounter(+counterId);
  })
}

function setClickingOnAddCounter(){
  onClick(SELECTORS.ADD_COUNTERS_BTN, () => {
    const counter = buildCounter("new counter", 0);
    state.addCounter(counter);
  })
}

function setTitleEditing() {
  onDblClick(SELECTORS.COUNTER_TITLE, () => {
    show(SELECTORS.COUNTER_TITLE_EDIT);
    hide(SELECTORS.COUNTER_TITLE);
    q(SELECTORS.COUNTER_TITLE_EDIT).focus();
  });
  onEnter(SELECTORS.COUNTER_TITLE_EDIT, () => {
    const name = q(SELECTORS.COUNTER_TITLE_EDIT).value;
    state.changeName(name);
    hide(SELECTORS.COUNTER_TITLE_EDIT);
    show(SELECTORS.COUNTER_TITLE);
    q(SELECTORS.COUNTER_TITLE_EDIT).blur();
  });
}

function setSocialSharing() {
  setFacebookShare();
  setTwitterShare();
  setShare();
}

