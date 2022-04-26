function setup() {
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentLoaded',setup, false);

window.addEventListener('beforeunLoad',function (event){
    var message = 'You have change that have not been saved';
    (event || window.event).returnValue = message;
    return message;
});