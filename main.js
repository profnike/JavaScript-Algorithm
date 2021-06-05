

//current
function letter(str, word){
    let newW;
    let arr=[];
    let newst;
    let newStr;
    
    let newSt;
    let count=0;
    for (let i=0; i<str.length; i++){
    let w=word.charAt(0);
    
    if(str[i]===w){
    newW=str[i];
     newSt=str[i-1];
    let len=word.length;
    let lentis=str[i+len];
    let ind=str.indexOf(w);
    
    
     let lents=ind+len;
     newst=str.slice(ind, lents);
    
    if(newst===word){
    if(typeof newSt==="string"){
    arr.push(newSt);
    }
    if(typeof lentis==="string"){
    arr.push(lentis);
    }
    
    }
    
    }
    
    
    }
    
    return arr.join("");
    }