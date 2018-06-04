var willekeurigGetal = function(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var mijnLinks = document.getElementsByTagName("a");

var teller = 0;
while (teller < mijnLinks.length){
mijnLinks[teller].onmouseover = function (){
  this.className = "zwart";

}
mijnLinks[teller].onmouseout = function (){
  this.className = "";

}
  teller++;
}
