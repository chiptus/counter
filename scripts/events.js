//events functions

function documentIsReady() {
  return (document.readyState === 'complete');
}

function onDocumentReady(callback = function () { }) {
  document.addEventListener('readystatechange', (e) => {
    if (documentIsReady()) {
      callback.call(this, e);;
    }
  });
}

function onClick(selector = "body", callback = function () { }) {
  document.querySelector(selector).addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    callback.call(this, e);;
  });
}

function onDblClick(selector, callback = function () { }) {
  document.querySelector(selector).addEventListener("dblclick", (e) => {
    e.preventDefault();
    e.stopPropagation();
    callback.call(this, e);
  })
}

function onEnter(selector, callback = function () { }) {
  q(selector).addEventListener('keypress', e => {
    if (e.charCode === 13) {
      e.preventDefault();
      callback.call(this, e);
    }
  })
}

function changeText(selector, text) {
  document.querySelector(selector).textContent = text;
}

function show(selector) {
  q(selector).removeAttribute('hidden');
}

function hide(selector) {
  q(selector).setAttribute('hidden', 'true');
}

function q(selector) {
  return document.querySelector(selector);
}
