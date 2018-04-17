//Takes in 2 parameters; a string and a number
//The string is moved the number of spots dictated by the number
//eg if the parameters are (bark, 1) then b ecomes c, a becomes b, r is s, k is l
//If you get to end of alphabet, code has to be able to loop around
//Code has to be able to accept negative numbers so we can shift back

function CaesarCipher(str, num)
{
num = num %26; //takes care of numbers greater/lower than +-26
//first make entire string into lowercase
var lowerCaseString = str.toLowerCase();
var alphabet = "abcdefghijklmnopqrstuvwxyz".split();
var newString = " ";

for(var i = 0; i<lowerCaseString.length; i++){
    var currentLetter = lowerCaseString[i];
    if(currentLetter === " "){
        newString += currentLetter;
        continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if(newIndex > 25) newIndex = newIndex - 26; //loop code
    if(newIndex < 0) newIndex = newIndex + 26;
    
    if(str[i]===str[i].toUpperCase()){
        newString+= alphabet[newIndex].toUpperCase();
    }
    
    else newString +=alphabet[newIndex];
}
    return newString;
}