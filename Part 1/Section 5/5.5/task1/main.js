function camelize(str){
    let splitAr = str.split('-');
    SplitString = splitAr.map((word,index,wrd)=>{
        console.log(word);
        if(index == 0) return word;
        splitWrd=  word.split('');
        splitWrd.splice(0,1,splitWrd[0].toUpperCase())
        return splitWrd.join('');
    })
    return SplitString.join('');

    
}
alert(camelize("-webkit-transition"));