function ransomNote(noteText, magazineText)
{
    var noteArr = noteText.split('');
    var magazineArr = magazineText.split('');
    var magazineObj = {};
    var noteObj= {};

   magazineArr.forEach(word =>
    {
        if(!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });
    console.log(magazineObj);

    noteArr.forEach(word =>
    {
        if(!noteObj[word]) noteObj[word] = 0;
        noteObj[word]++;
    });
    console.log(noteObj);
}
ransomNote("","this is all text");
ransomNote("","we have your grandmorther!");