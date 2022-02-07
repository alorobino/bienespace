$(document).ready(function() {
$('.texts').textillate({
    minDisplayTime: 1000, 
    in: { effect: 'flipInX', sync: true }, 
    out :{  delay: 3, effect: 'lightSpeedOut', sync: true},
    loop: true
});
});
const textList = ["Corgi", "Shih Tzu", "Pug", "Dachshund"];
const cycle = document.querySelector("#cycle");
let i = 0;
const cycleText = () => {
  cycle.innerHTML = textList[i];
  i = ++i % textList.length;
};
cycleText();
setInterval(cycleText, 1000);

const textList2 = ["Corgi", "Shih Tzu", "Pug", "Dachshund"];
const cycle2 = document.querySelector("#cycle2");
let j = 0;
const cycleText2 = () => {
  cycle2.innerHTML = textList2[i];
  j = ++j % textList2.length;
};
cycleText2();
setInterval(cycleText2, 2000);

