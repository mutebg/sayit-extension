function speak(textToSpeak) {
  var newUtterance = new SpeechSynthesisUtterance();
  newUtterance.text = textToSpeak;
  newUtterance.voiceURI = 'Google UK English Female';
  newUtterance.lang = 'en-GB'
  window.speechSynthesis.speak(newUtterance);
}

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  var selectionText = info.selectionText;
  if ( selectionText ) {
    speak( selectionText );
  }
});

chrome.contextMenus.create({
  id: 'open',
  title: chrome.i18n.getMessage('openContextMenuTitle'),
  contexts: ['selection'],
});