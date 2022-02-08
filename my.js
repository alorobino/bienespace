const textList = ["unused space", "expense", "cleaning", "emissions", "stuff"];
const cycle = document.querySelector("#cycle");
let i = 0;
const cycleText = () => {
  cycle.innerHTML = textList[i];
  i = ++i % textList.length;
};
cycleText();
setInterval(cycleText, 400);

const textList2 = ["time", "freedom", "money", "calm", "happiness", "rest", "good health", "what matters"];
const cycle2 = document.querySelector("#cycle2");
let j = 0;
const cycleText2 = () => {
  cycle2.innerHTML = textList2[j];
  j = ++j % textList2.length;
};
cycleText2();
setInterval(cycleText2, 800);

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height= "10%";
    document.getElementById("lgo").style.height = "100%";

  } else {
    document.getElementById("header").style.height = "20%";
    document.getElementById("lgo").style.height = "100%";

  }
}

$(document).ready(function(){
    $(this).scrollTop(0);
});
