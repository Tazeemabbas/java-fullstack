let sentence = "JavaScript is a programming language";
let firstWordLastIndex = 0;

for(let i=0; i<sentence.length; i++){
  if(sentence[i] == " "){
    break;
  }else{
    firstWordLastIndex++;
  }
}

let firstword = sentence.slice(0, firstWordLastIndex);
let firstWordtoUpperCase = firstword.toUpperCase();
let output = firstWordtoUpperCase + sentence.slice(firstWordLastIndex);
console.log(output)