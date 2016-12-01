function changeCounterText(c) {
  changeText(SELECTORS.COUNT, c);
}

function changeCounterTitle(title) {
  changeText('#counter-title', title);
  q('#counter-title-edit').value = title;
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

function setTitleEditing() {
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
}

function setSocialSharing() {
  setFacebookShare();
  setTwitterShare();
  setShare();
}

