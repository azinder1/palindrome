var sentence = "mom om";
var symbols = [".", "," ," " ,"-", "!" ,"'"];
for (var counter = 0; counter < sentence.length; counter += 1){
  if (sentence[counter].includes(symbols)){
    sentence[counter]="";
  }
}
sentence = sentence.toLowerCase();
var sentArray = sentence.split("");
var reverseArray = sentArray.slice();
reverseArray = reverseArray.reverse();
// for (var counter = 0; counter <= reverseArray.length; counter += 1){
// 	if (symbols.indexOf(reverseArray[counter]) >-1)  {
//   	reverseArray[counter];
//   };
// };		alert(reverseArray);

for (var counter = 0; counter <= reverseArray.length; counter += 1){
	if (sentArray[counter]  !== reverseArray[counter]){
  alert("Not a palindrome");
  break;
  } else if (counter === reverseArray.length ) {
		alert("!!!");
  };
};
