const prompt= require('prompt-sync');
const text1 = prompt()('enter the first word');
const text2 = prompt()('enter the second word');
if (text1===text2){
    console.log('the channels are equal.');
} else{
    console.log('the channels are not equal.');
}