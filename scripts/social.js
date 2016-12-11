function setFacebookShare() {
  onClick(SELECTORS.SOCIAL_FACEBOOK, () => {
    window.open(facebookShareUrl(state), "_blank");
  });
}

function setTwitterShare() {
  onClick(SELECTORS.SOCIAL_TWITTER, () => {
    window.open(twitterShareUrl(state), "_blank");
  });
}

function setShare(){
  onClick(SELECTORS.SHARE_BUTTON, () => {
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