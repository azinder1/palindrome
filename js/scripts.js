var sentence = prompt("Check if it's a palindrome here!");
var symbols = [".", "," ," " ,"-", "!" ,"'"];

sentence = sentence.toLowerCase();
var sentArray = sentence.split("");
var reverseArray = sentArray.slice();
reverseArray = reverseArray.reverse();



for (var counter = sentArray.length-1; counter >= 0; counter --){
	if (symbols.indexOf(sentArray[counter]) >-1)  {
 	sentArray.splice(counter,1);
  };
};	//alert(sentArray)

for (var counter = reverseArray.length-1; counter >= 0; counter --){
	if (symbols.indexOf(reverseArray[counter]) >-1)  {
  	reverseArray.splice(counter,1);
  };
};	//alert(reverseArray)

for (var counter = 0; counter <= reverseArray.length; counter ++){
	if (sentArray[counter]  !== reverseArray[counter]){
  alert("Not a palindrome");
  break;
} else if (counter === reverseArray.length ) {
		alert("!!!");
  };
};
