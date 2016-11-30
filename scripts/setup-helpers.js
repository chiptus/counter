function changeCounterText(c) {
  changeText('#counter', c);
}

function changeCounterTitle(title) {
  changeText('#counter-title', title);
  q('#counter-title-edit').value = title;
}

function fillCounter({counter, name}) {
  changeCounterText(counter);
  changeCounterTitle(name);
}

function setClickingOnCounter() {
  onClick("#counter", () => {
    state.increaseCounter();
  });
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

