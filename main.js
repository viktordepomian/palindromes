// IS THE WORD A PALINDROME OR NOT?

function checkWord(word){
    let arr = [...word]
    let revArr = arr.reverse();

    let revString = revArr.join('');

    if(word === revString){
        console.log('True');
    } else{
        console.log('False');
    }
}

checkWord('civic');