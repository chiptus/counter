function setFacebookShare() {
  onClick('#share-facebook', () => {
    window.open(facebookShareUrl(state), "_blank");
  });
}

function setTwitterShare() {
  onClick('#share-twitter', () => {
    window.open(twitterShareUrl(state), "_blank");
  });
}

function setShare(){
  onClick('#share', () => {
    copyToClipboard(getSocialMessage(state));
  })
}

function twitterShareUrl(counter) {
  return `https://twitter.com/intent/tweet?text=${getSocialMessage(counter)}`;
}

function facebookShareUrl(counter) {
  const quote = getSocialMessage(counter);
  const url = 'http://chiptus.github.com';
  return `https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&quote=${quote}&href=${url}`;
}

function getSocialMessage(counter) {
  return `I counted on ${counter.name} already ${counter.counter} clicks using chiptus's counter`;
}