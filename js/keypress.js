var el;

function charCount(e) {
    var textEntered, charDisplay,counter, lastkey;
    textEntered = document.getElementById('message');
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;
    lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;
}
el = document.getElementById('message');
el.addEventListener('keyup', charCount, false);