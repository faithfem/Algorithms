function ransomNote(noteText, magazineText)
{
    var noteArr = noteText.split('');
    var magazineArr = magazineText.split('');
    var magazineObj = {};
    
    magazineArr.forEach(word => 
    {
        if(!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });
    console.log(magazineObj);
}
ransomNote(" ","this is all the magazine text in the magazine");
