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


function setClickingOnCounter() {
  onClick(SELECTORS.COUNT, () => {
    state.increaseCounter();
  });
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

