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

function changeText(selector, text) {
  document.querySelector(selector).textContent = text;
}
