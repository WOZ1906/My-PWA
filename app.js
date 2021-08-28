const texts = ['Progressive', 'Website', 'Application'];
let count = 0;
let index = 0;
let currentText ='';
let letter = '';

(function type() {
    // Compare Count to Text length, when it get to 3 resets it
    if (count === texts.length) {
        count = 0;
    }

currentText = texts[count];
letter = currentText.slice(0, ++index);
// Select the class and change its content to letter 
document.querySelector('.txt-type').textContent = letter;
// As soon as letter length is the same as our currentText, we go to the next one 
if(letter.length === currentText.length){
    count++;
// Reset starting from the beginning of the word 
    index = 0;
}
setTimeout(type, 400);
})();
