alert("");

 //Function to change the content of t2
/*function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}*/

function on(){
	var x = document.getElementById("myDIV");
  x.querySelector("img").src='pic_bulbon.gif';
	//document.getElementById('myImage').src='pic_bulbon.gif';
}
function off(){
	var x = document.getElementById("myDIV");
  x.querySelector("img").src='pic_bulboff.gif';
	//document.getElementById('myImage').src='pic_bulboff.gif';
}

/*// Add event listener to table
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
*/
 
const el2 = document.getElementById("on");
el2.addEventListener("click", on, false);

const el3 = document.getElementById("off");
el3.addEventListener("click", off, false);