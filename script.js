const submitButton = document.getElementById("check-btn");



function palindromeCheck(){
  const text = document.getElementById("text-input").value; 
  const result = document.getElementById("result"); 
  if(text === ""){
   alert("Please input a value"); 
   return; 
  }else{ 
    const textUpdate = text.replace(/[^0-9a-z]/gi, '');
    const textFinal = textUpdate.toLowerCase(); 
    const textSplit = textFinal.split(''); 
  for(let i = 0; i<textSplit.length/2; i++){
      if(textSplit[i]!==textSplit[textSplit.length-1-i]){
        result.innerHTML=`<p>${text} is not a palindrome.</p>`;
        return; 
      }
    
  }
   result.innerHTML=`<p>${text} is a palindrome!</p>`;
  }
}
  
